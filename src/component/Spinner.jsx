import { LoaderCircleIcon, LoaderIcon, LoaderPinwheelIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Default = ({ className, ...props }) => (
  <LoaderIcon className={cn("animate-spin", className)} {...props} />
);

export const Spinner = ({ variant, ...props }) => {
  return <Default {...props} />;
};
