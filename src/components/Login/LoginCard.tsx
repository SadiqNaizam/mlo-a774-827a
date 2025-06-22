import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FormInput from './FormInput';
import FormButton from './FormButton';
import FormLinks from './FormLinks';

const LoginCard: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Logging in with:', { email, password });
  };

  return (
    <Card className="w-96 max-w-full p-6 bg-card shadow-lg rounded-xl border-none">
      <CardHeader className="p-0 pb-8">
        <CardTitle className="text-3xl font-bold text-center text-card-foreground">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <FormInput
              id="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <FormInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <div className="self-start">
            <Button variant="link" className="p-0 h-auto text-sm font-normal text-muted-foreground hover:text-primary">
              Forgot Password
            </Button>
          </div>

          <div className="pt-2">
            <FormButton type="submit">Login</FormButton>
          </div>
          
          <div className="pt-2">
            <FormLinks />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
