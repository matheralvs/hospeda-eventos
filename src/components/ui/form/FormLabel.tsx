import * as React from "react";

import * as LabelPrimitive from "@radix-ui/react-label";

import { useFormField } from "@/hooks/useFormField";

import { cn } from "@/lib/utils";

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "text-sm text-content-base/60",
        error && "text-red-500",
        className,
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";
