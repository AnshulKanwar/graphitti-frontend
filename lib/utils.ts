import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const download = (filename: string) => {
  var a = document.createElement("a");
  a.href = `http://localhost:8080/download/${filename}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
};
