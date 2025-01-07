import Form from 'next/form';

import { Input } from '@/components/input';

export function AuthForm ({ action, children, defaultEmail = '', defaultPassword = '', }: {
  action: any; children: React.ReactNode; defaultEmail?: string; defaultPassword?: string;
}) {
  return (
    <Form action={action} className="flex flex-col gap-4 px-4 sm:px-16">
      <div className="flex flex-col gap-2">
      <label>Email</label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="user@email.com"
        autoComplete="email"
        required
        defaultValue={defaultEmail}
      />
      <label>Password</label>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="password"
        required
        defaultValue={defaultPassword}
      />
      </div>
      {children}
    </Form>
  );
}
