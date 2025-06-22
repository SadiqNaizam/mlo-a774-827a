import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  containerClassName?: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type = 'text', className, containerClassName, ...props }) => {
  return (
    <div className={cn("grid w-full items-center gap-2", containerClassName)}>
      <Label htmlFor={id} className="text-sm text-muted-foreground font-medium">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        className={cn(
          "border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent h-auto py-1.5 text-base text-card-foreground",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default FormInput;
