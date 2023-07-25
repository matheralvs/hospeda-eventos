import { TextareaHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ rows, className, ...props }, ref) => {
    return (
      <textarea
        rows={rows}
        className={cn(
          "form-textarea w-full resize-none rounded-xl border-interactive-secondary placeholder:text-content-base/40",
          className,
        )}
        {...props}
      />
    );
  },
);

TextArea.displayName = "TextArea";
