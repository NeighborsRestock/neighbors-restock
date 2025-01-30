import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function testCSSBorders (borderColor: string = "blue-500", borderWidth: number = 2) {
  const reconciledStyles = borderColor.split('').includes('-') ? borderColor : `[${borderColor}`;
  return `border-[${borderWidth}px] border-solid border-${reconciledStyles}`;
}