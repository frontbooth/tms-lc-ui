import { CalendarOutlined, SwapOutlined } from "@ant-design/icons";
import { InputMask } from "@react-input/mask";
import {
  Alert,
  Button,
  DatePicker,
  Divider,
  Radio,
  Space,
  Tooltip,
  Typography,
} from "antd";
import type { Dayjs } from 'dayjs';
import NepaliDate from "nepali-date-converter";
import { useState } from "react";

const { Text } = Typography;

interface ConversionResult {
  original: string;
  converted: string;
  englishWeekDay?: string;
  nepaliWeekDay?: string;
  type: string;
  error?: never;
  message?: never;
}

interface ConversionError {
  error: boolean;
  message: string;
  original?: never;
  converted?: never;
  englishWeekDay?: never;
  nepaliWeekDay?: never;
  type?: never;
}

type ResultType = ConversionResult | ConversionError | null;

const FixedDateConverterButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleConverter = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Tooltip placement="left" title={"Convert Date"}>
      <div className="fixed top-[140px] right-0 z-10 ">
        <div
          onClick={toggleConverter}
          className="rounded-l-[20px] border-2 w-full flex justify-between items-center p-2 shadow-md bg-[var(--primary-color)] text-white cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <CalendarOutlined style={{ fontSize: "24px" }} />
          </span>
        </div>
        <div
          className={`fixed top-[180px] right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isVisible ? "translate-x-0 right-6" : "translate-x-full"
          }`}
          style={{
            marginTop: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            maxHeight: "calc(100vh - 150px)",
            overflowY: "auto",
            borderRadius: "5px",
            width: "280px",
          }}
        >
          <DateConverter />
        </div>
      </div>
    </Tooltip>
  );
};

const DateConverter = () => {
  const [englishDate, setEnglishDate] = useState<Dayjs | null>(null);
  const [nepaliDate, setNepaliDate] = useState<string>("");
  const [conversion, setConversion] = useState<"nepali" | "english">("nepali");
  const [result, setResult] = useState<ResultType>(null);

  const nepaliWeekDays = [
    "आइतबार",
    "सोमबार",
    "मङ्गलबार",
    "बुधबार",
    "बिहीबार",
    "शुक्रबार",
    "शनिबार",
  ];

  const englishWeekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const options = [
    { label: "Nepali Date", value: "nepali" },
    { label: "English Date", value: "english" },
  ];

  const convertDate = () => {
    try {
      if (conversion === "nepali" && englishDate) {
        const date = new Date(englishDate.toDate());
        const nepaliConverted = new NepaliDate(date);
        const convertedDate = `${nepaliConverted.getYear()}-${(
          nepaliConverted.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${nepaliConverted
          .getDate()
          .toString()
          .padStart(2, "0")}`;
        const englishWeekDay = englishWeekDays[date.getDay()];

        setResult({
          original: englishDate.format("YYYY-MM-DD"),
          converted: convertedDate,
          englishWeekDay,
          type: "Nepali Date (BS)",
        });
      } else if (conversion === "english" && nepaliDate) {
        const match = nepaliDate.replace(/-/g, "").match(/(\d{4})(\d{2})(\d{2})/);
        
        if (!match) {
          throw new Error("Invalid date format");
        }

        const [, yearStr, monthStr, dayStr] = match;
        const year = parseInt(yearStr, 10);
        const month = parseInt(monthStr, 10);
        const day = parseInt(dayStr, 10);

        const englishConverted = new NepaliDate(year, month - 1, day).getAD();
        const convertedDate = new Date(
          englishConverted.year,
          englishConverted.month,
          englishConverted.date + 1
        );
        const nepaliWeekDay = nepaliWeekDays[convertedDate.getDay()];

        setResult({
          original: nepaliDate,
          converted: convertedDate.toISOString().split("T")[0],
          nepaliWeekDay,
          type: "English Date (AD)",
        });
      }
    } catch (error) {
      setResult({
        error: true,
        message: "Invalid date format. Please check your input.",
      });
    }
  };

  const onChangeEnglishDate = (date: Dayjs | null) => {
    setEnglishDate(date);
    setResult(null);
  };

  const onChangeNepali = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNepaliDate(e.target.value);
    setResult(null);
  };

  const handleConversion = (e: any) => {
    setConversion(e.target.value);
    setNepaliDate("");
    setEnglishDate(null);
    setResult(null);
  };

  return (
    <div className="p-4 border-b-3 border-[var(--primary-color)] rounded-b z-50 ">
      <Space direction="vertical" className="w-[100%]" size="middle">
        <Radio.Group
          options={options}
          onChange={handleConversion}
          value={conversion}
          optionType="button"
          buttonStyle="solid"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Radio.Button
            style={{
              color:
                conversion === "nepali" ? "var(--primary-color)" : undefined,
            }}
            value="nepali"
          >
            Nepali Date
          </Radio.Button>
          <Radio.Button
            style={{
              color:
                conversion === "english" ? "var(--primary-color)" : undefined,
            }}
            value="english"
          >
            English Date
          </Radio.Button>
        </Radio.Group>

        <Divider style={{ margin: "0px" }} />

        {conversion === "nepali" ? (
          <>
            <div className="text-[var(--primary-color)] text-[14px]">
              Convert to Nepali
            </div>
            <DatePicker
              placeholder="Select English Date"
              onChange={onChangeEnglishDate}
              value={englishDate}
              format="YYYY-MM-DD"
              style={{ width: "100%" }}
              size="large"
            />
          </>
        ) : (
          <div>
            <div className="pb-4 text-[var(--primary-color)] text-[14px]">
              Convert to English
            </div>
            <InputMask
              mask="9999-99-99"
              replacement={{ 9: /\d/ }}
              value={nepaliDate}
              onChange={onChangeNepali}
              placeholder="YYYY-MM-DD (e.g., 2080-12-15)"
              style={{
                width: "100%",
                height: "40px",
                padding: "8px 12px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #d9d9d9",
              }}
            />
            <Text
              type="secondary"
              style={{ fontSize: "12px", display: "block", marginTop: "4px" }}
            >
              Format: YYYY-MM-DD (e.g., 2080-12-15)
            </Text>
          </div>
        )}

        <Button
          type="primary"
          onClick={convertDate}
          disabled={!englishDate && !nepaliDate}
          icon={<SwapOutlined />}
          size="middle"
          block
        >
          Convert
        </Button>

        {result && !('error' in result) && (
          <Alert
            message={
              <Space direction="vertical" style={{ width: "100%" }}>
                <Text strong>Original: {result.original}</Text>
                <Text strong type="success">
                  {result.type}: {result.converted} (
                  {result.nepaliWeekDay || result.englishWeekDay})
                </Text>
              </Space>
            }
            type="success"
            showIcon
          />
        )}

        {result && 'error' in result && (
          <Alert message={result.message} type="error" showIcon />
        )}
      </Space>
    </div>
  );
};

export default FixedDateConverterButton;