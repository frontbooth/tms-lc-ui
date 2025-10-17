import { Checkbox, DatePicker, Input, Radio, Select } from "antd";
import type { InputRef } from "antd";
import dayjs, { Dayjs } from "dayjs";
import type { FormikValues } from "formik";
import { useFormikContext } from "formik";
import { forwardRef, useCallback, useMemo } from "react";
import { formatAmount } from "../../../utils/usFormat";
import type { ReactNode, FocusEvent } from "react";

// --------------------------------------------
// Types
// --------------------------------------------
interface Option {
  value: string | number;
  label: string | ReactNode;
}

interface MaskedInputProps {
  maskFormat: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: { target: { value: string } }) => void;
  size?: "small" | "middle" | "large";
  style?: React.CSSProperties;
  disabled?: boolean;
}

interface AtomInputFormikProps {
  name: string;
  type?:
  | "text"
  | "number"
  | "textarea"
  | "password"
  | "mask"
  | "radio"
  | "checkbox"
  | "select"
  | "date"
  | "amount";
  label?: string;
  checkedLabel?: string;
  required?: boolean;
  maskFormat?: string;
  max?: number;
  rows?: number;
  options?: Option[];
  multiple?: boolean;
  size?: "small" | "middle" | "large";
  showSearch?: boolean;
  placeholder?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  style?: React.CSSProperties;
  labelClassName?: string;
  disabled?: boolean;
  [key: string]: any;
}

// --------------------------------------------
// MaskedInput Component (Optimized)
// --------------------------------------------
const MaskedInput: React.FC<MaskedInputProps> = ({
  maskFormat,
  placeholder,
  value = "",
  onChange,
  size,
  style,
  disabled,
  ...props
}) => {
  const formatValue = useCallback((val: string): string => {
    if (!val) return "";

    let formatted = "";
    let valIndex = 0;

    for (let i = 0; i < maskFormat.length && valIndex < val.length; i++) {
      const maskChar = maskFormat[i];
      if (maskChar === "9") {
        if (/\d/.test(val[valIndex])) {
          formatted += val[valIndex];
          valIndex++;
        } else {
          valIndex++;
        }
      } else {
        formatted += maskChar;
      }
    }
    return formatted;
  }, [maskFormat]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = formatValue(rawValue);
    onChange?.({ target: { value: formattedValue } });
  }, [formatValue, onChange]);

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      size={size}
      style={style}
      disabled={disabled}
      {...props}
    />
  );
};

// --------------------------------------------
// AtomInputFormik Component (Optimized)
// --------------------------------------------
const AtomInputFormik = forwardRef<InputRef, AtomInputFormikProps>(
  (
    {
      size = "large",
      type = "text",
      maskFormat,
      max,
      rows = 3,
      options = [],
      placeholder,
      multiple,
      name,
      onChange,
      onBlur,
      label,
      checkedLabel,
      labelClassName = "block text-sm font-normal text-gray-700 mb-2",
      required,
      showSearch = true,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    // Formik context
    const { values, errors, touched, setFieldValue, handleBlur: formikHandleBlur } =
      useFormikContext<FormikValues>();

    const value = values?.[name];
    const error = touched?.[name] && errors?.[name];
    const hasError = Boolean(error);

    // Memoized styles and values
    const errorStyle = useMemo((): React.CSSProperties => ({
      borderColor: "#ff4d4f"
    }), []);

    const inputStyle = useMemo(() =>
      hasError ? { ...errorStyle, ...style } : style,
      [hasError, errorStyle, style]);

    const pickerValue = useMemo((): Dayjs | null =>
      value && typeof value === "string" ? dayjs(value) : (value as Dayjs) || null,
      [value]);

    // Event handlers
    const handleBlurWrapper = useCallback((e: any) => {
      if (e?.target) {
        formikHandleBlur(e);
      } else {
        // Handle synthetic events
        formikHandleBlur({ target: { name, value: e?.target?.value || value } });
      }
      onBlur?.(e);
    }, [formikHandleBlur, name, value, onBlur]);

    const handleRadioChange = useCallback((e: any) => {
      setFieldValue(name, e.target.value);
      onChange?.(e);
    }, [setFieldValue, name, onChange]);

    const handleSelectChange = useCallback((val: any) => {
      setFieldValue(name, val);
      onChange?.({ target: { value: val } });
    }, [setFieldValue, name, onChange]);

    const handleCheckboxChange = useCallback((e: any) => {
      setFieldValue(name, e.target.checked);
      onChange?.(e);
    }, [setFieldValue, name, onChange]);

    const handleAmountInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      let val = (e.target as HTMLInputElement).value.replace(/[^\d.]/g, "");
      const decimalIndex = val.indexOf(".");

      if (decimalIndex !== -1) {
        val = val.substring(0, decimalIndex + 1) + val.substring(decimalIndex + 1, decimalIndex + 3);
      }

      setFieldValue(name, val);
      onChange?.({ target: { value: val } });
    }, [setFieldValue, name, onChange]);

    const handleAmountBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      if (rawValue) {
        const numericValue = parseFloat(rawValue.replace(/,/g, ""));
        if (!isNaN(numericValue)) {
          const formatted = formatAmount(numericValue);
          setFieldValue(name, formatted);
          onChange?.({ target: { value: formatted } });
        }
      }
      formikHandleBlur(e);
      onBlur?.(e);
    }, [setFieldValue, name, onChange, formikHandleBlur, onBlur]);

    const handleNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const digits = e.target.value.replace(/\D/g, "");
      setFieldValue(name, digits);
      onChange?.(e);
    }, [setFieldValue, name, onChange]);

    // Common props for all input types
    const commonProps = useMemo(() => ({
      name,
      placeholder,
      size,
      style: inputStyle,
      disabled,
      ...props,
    }), [name, placeholder, size, inputStyle, disabled, props]);

    // Render input based on type
    const renderInput = useCallback(() => {
      switch (type) {
        case "textarea":
          return (
            <Input.TextArea
              {...commonProps}
              ref={ref}
              value={value}
              onChange={(e) => {
                setFieldValue(name, e.target.value);
                onChange?.(e);
              }}
              onBlur={handleBlurWrapper}
              maxLength={max}
              rows={rows}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          );

        case "number":
          return (
            <Input
              {...commonProps}
              ref={ref}
              value={value}
              onChange={handleNumberChange}
              onBlur={handleBlurWrapper}
              inputMode="numeric"
              pattern="\d*"
            />
          );

        case "date":
          return (
            <DatePicker
              {...commonProps}
              value={pickerValue}
              onChange={(date) => setFieldValue(name, date ? date.toISOString() : "")}
              onBlur={handleBlurWrapper}
              style={{ width: "100%", ...inputStyle }}
            />
          );

        case "password":
          return (
            <Input.Password
              {...commonProps}
              ref={ref}
              value={value}
              onChange={(e) => {
                setFieldValue(name, e.target.value);
                onChange?.(e);
              }}
              onBlur={handleBlurWrapper}
              maxLength={max}
            />
          );

        case "mask":
          return (
            <MaskedInput
              {...commonProps}
              maskFormat={maskFormat!}
              value={value}
              onChange={({ target }) => {
                setFieldValue(name, target.value);
                onChange?.({ target: { value: target.value } });
              }}
            />
          );

        case "radio":
          return (
            <Radio.Group
              {...commonProps}
              value={value}
              onChange={handleRadioChange}
              onBlur={handleBlurWrapper}
            >
              {options.map((option: Option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label ?? ""}
                </Radio>
              ))}
            </Radio.Group>
          );

        case "checkbox":
          return (
            <Checkbox
              {...commonProps}
              checked={Boolean(value)}
              onChange={handleCheckboxChange}
              onBlur={handleBlurWrapper}
            >
              {checkedLabel && (
                <span className="text-[14px] font-lite text-gray-700">
                  {checkedLabel}
                </span>
              )}
            </Checkbox>
          );

        case "select":
          return (
            <Select
              {...commonProps}
              showSearch={showSearch}
              optionFilterProp="label"
              filterOption={(input: string, option?: Option) =>
                !!option?.label && option.label.toString().toLowerCase().includes(input.toLowerCase())
              }
              value={value}
              onChange={handleSelectChange}
              onBlur={handleBlurWrapper}
              mode={multiple ? "multiple" : undefined}
              style={{ width: "100%", ...inputStyle }}
              options={options}
            />
          );

        case "amount":
          return (
            <Input
              {...commonProps}
              ref={ref}
              value={value}
              onInput={handleAmountInput}
              onBlur={handleAmountBlur}
            />
          );

        default: // text
          return (
            <Input
              {...commonProps}
              ref={ref}
              value={value}
              onChange={(e) => {
                setFieldValue(name, e.target.value);
                onChange?.(e);
              }}
              onBlur={handleBlurWrapper}
              maxLength={max}
            />
          );
      }
    }, [
      type, commonProps, value, max, rows, maskFormat, options, showSearch, multiple,
      pickerValue, handleRadioChange, handleCheckboxChange, handleSelectChange,
      handleAmountInput, handleAmountBlur, handleNumberChange, handleBlurWrapper,
      setFieldValue, name, onChange, inputStyle, ref, checkedLabel
    ]);

    return (
      <div className="atom-input-formik">
        {/* Label */}
        {label && type !== "checkbox" && (
          <div className="flex items-start relative">
            {required && (
              <span className="text-red-400 text-[20px] absolute left-[-10px]">*</span>
            )}
            <label className={labelClassName} htmlFor={name}>
              {label}
            </label>
          </div>
        )}

        {/* Input */}
        {renderInput()}

        {/* Error Message */}
        {error && (
          <div className="text-[#ff4d4f] text-[14px] mt-1">
            {String(error)}
          </div>
        )}
      </div>
    );
  }
);

// Add display name for better debugging
AtomInputFormik.displayName = 'AtomInputFormik';

export { AtomInputFormik };