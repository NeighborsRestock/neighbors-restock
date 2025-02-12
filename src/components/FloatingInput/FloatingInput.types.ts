import { ChangeEvent } from "react";

export type FloatingLabelInputProps = {
    id: string;
    label: string;
    pattern?: string;
    type?: string;
    onFieldChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, callback: () => void) => void;
  }