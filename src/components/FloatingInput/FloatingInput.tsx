import type React from "react";
import { useState } from "react";

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type?: string;
}

export default function FloatingLabelInput({
  id,
  label,
  type = "text",
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
        placeholder={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 -top-3.5 text-gray-600 text-sm transition-all
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
          peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
      >
        {label}
      </label>
    </div>
  );
}
