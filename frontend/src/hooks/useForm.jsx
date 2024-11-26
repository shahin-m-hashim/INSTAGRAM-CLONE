/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect, useCallback } from "react";

export default function useForm(initialFields, requiresValidation = true) {
  let debouncer = useRef(null);
  const submitBtnRef = useRef(null);
  const [fields, setFields] = useState(initialFields);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: { ...prev[name], value, error: null, showIcon: false },
    }));
  }, []);

  const handleBlur = useCallback((e) => {
    if (requiresValidation) {
      const { name, value } = e.target;
      const { validator } = fields[name];
      if (debouncer.current) clearTimeout(debouncer.current);

      if (validator) {
        debouncer.current = setTimeout(() => {
          const error = validator(value);
          setFields((prev) => ({
            ...prev,
            [name]: { ...prev[name], error, showIcon: true },
          }));
        }, 500);
      }
    }
  }, []);

  const reset = () => setFields(initialFields);

  const getFormData = () => {
    const formData = {};
    Object.keys(fields).forEach((field) => {
      formData[field] = fields[field].value;
    });
    return JSON.stringify(formData);
  };

  useEffect(() => {
    const isValid = Object.keys(fields).every((field) => {
      const { validator, value, required = true } = fields[field];
      return validator ? !validator(value) : !required || value;
    });

    if (isValid) {
      submitBtnRef.current.disabled = false;
      submitBtnRef.current.classList.remove("opacity-70");
    } else {
      submitBtnRef.current.disabled = true;
      submitBtnRef.current.classList.add("opacity-70");
    }
  }, [fields]);

  useEffect(() => {
    if (debouncer.current) clearTimeout(debouncer.current);
  }, []);

  return {
    reset,
    fields,
    handleBlur,
    getFormData,
    handleChange,
    submitBtnRef,
  };
}
