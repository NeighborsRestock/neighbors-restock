import { FloatingLabelInputProps } from "./FloatingInput.types";

export default function FloatingLabelInput({
  id,
  label,
  value,
  pattern,
  className,
  type = "text",
  onFieldChange,
}: FloatingLabelInputProps) {
  return (
    <div className="relative">
      <input
        pattern={pattern}
        type={type}
        id={id}
        name={id}
        data-name={id}
        className={`
          peer font-exo h-10 w-full ${className ?? ""} ${value !== "" ? "border-white" : ""} border-b-2 
          text-white placeholder-transparent bg-transparent 
          outline-none focus:outline-none
          text-4xl md:text-2xl mb-4 
        `}
        placeholder={label}
        onChange={(e) => {
          onFieldChange(e);
        }}
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
