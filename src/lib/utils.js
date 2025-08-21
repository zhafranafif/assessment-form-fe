import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const SCORE = [1, 2, 3, 4, 5];

export const RATING_LABEL = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];
export const RATING_EMOJI = ["😠", "😟", "😐", "😊", "😁"];
