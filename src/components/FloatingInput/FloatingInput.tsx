import type React from "react";
import { useState } from "react";
import { FloatingLabelInputProps } from "./FloatingInput.types";

export default function FloatingLabelInput({
  id,
  label,
  pattern,
  type = "text",
}: FloatingLabelInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className="relative">
      <input
        pattern={pattern}
        type={type}
        id={id}
        className="peer font-exo h-10 w-full border-b-2 text-4xl md:text-2xl mb-4 text-white placeholder-transparent bg-transparent outline-none focus:outline-none"
        placeholder={label}
        onChange={handleChange}
        value={value}
      />
      <label
        htmlFor={id}
        className={`absolute font-exo left-0 -top-3.5 outline-none text-white text-4xl transition-all
          peer-placeholder-shown:text-4xl peer-placeholder-shown:text-white peer-placeholder-shown:-top-1
          peer-focus:-top-5 peer-focus:text-white peer-focus:text-sm opacity-40 peer-focus:opacity-100

          ${value !== "" ? "-top-5 text-sm opacity-100" : "peer-placeholder-shown:-top-1"}
        `}
      >
        {label}
      </label>
    </div>
  );
}
