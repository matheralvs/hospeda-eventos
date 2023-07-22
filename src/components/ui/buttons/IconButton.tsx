import { ButtonHTMLAttributes, ElementType, forwardRef } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, ...props }, ref) => {
    return (
      <button
        className="flex h-8 w-8 items-center justify-center text-black transition-colors"
        {...props}
        ref={ref}
      >
        <Icon />
      </button>
    );
  },
);
IconButton.displayName = "IconButton";
