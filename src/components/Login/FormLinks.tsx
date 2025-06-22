import React from 'react';
import { Button } from '@/components/ui/button';

const FormLinks: React.FC = () => {
  return (
    <p className="text-center text-sm text-muted-foreground">
      Don't have an account?{' '}
      <Button variant="link" className="p-0 h-auto font-semibold text-primary hover:no-underline">
        SignUp
      </Button>
    </p>
  );
};

export default FormLinks;
