import { useEffect } from "react";

export const UseScrollToFirstError = (
  errors: Record<string, any>,
  submitCount: number
) => {
  useEffect(() => {
    // only run after the form has been submitted at least once
    if (submitCount === 0) return;

    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      const firstErrorField = Object.keys(errors)[0];
      const el = document.querySelector(
        `[name="${firstErrorField}"]`
      ) as HTMLElement | null;

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      
      }
    }
  }, [submitCount]);
};
