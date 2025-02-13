import { ContactFormInputs } from "@/hooks/types";
import { ChangeEvent } from "react";

export type FloatingLabelInputProps = {
  id: ContactFormInputs;
  type?: string;
  label: string;
  value: string;
  pattern?: string;
  className?: string;
  isSubmitActive: boolean;
  setIsSubmitActive: React.Dispatch<React.SetStateAction<boolean>>;
  onFieldChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, callback: () => void) => void;
};