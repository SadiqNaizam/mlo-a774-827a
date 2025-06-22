import React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FormButton: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button
      className={cn(
        "w-full h-11 rounded-lg text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default FormButton;
