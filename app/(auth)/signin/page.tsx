'use client';

import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';

import { AuthForm } from '@/components/auth-form';

import { signin, SigninActionState } from '@/app/(auth)/actions';

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, formAction] = useActionState<SigninActionState, FormData>(
    signin,
    {
      status: "idle",
    },
  );

  useEffect(() => {
    if (state.status === "failed") {
      console.log("Invalid credentials!");
    } else if (state.status === "invalid_data") {
      console.log("Failed validating your submission!");
    } else if (state.status === "success") {
      console.log("Success validating your submission!")
      router.refresh();
    }
  }, [state.status, router]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  function SetValue() {
    setEmail("test@gmail.com");
    setPassword("admin123");
  };

  return (
  <>

    <AuthForm action={handleSubmit} defaultEmail={email} defaultPassword={password}>
      <div className="flex justify-center p-5">
        <button
          className="rounded-xl border-2 hover:border-rose-600 w-1/3 sm:w-1/5 hover:scale-125 transition hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500
          to-90% hover:text-white" type="submit"
        >
          Sign In</button>
      </div>
    </AuthForm>
    <div className="p-5">
      <p>Test User Account: test@gmail.com</p>
      <p>Password: admin123</p>
      <button onClick={SetValue}
        className="rounded-xl border-2 hover:border-rose-600 w-1/3 sm:w-1/5 hover:scale-125 transition hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500
        to-90% hover:text-white"
      >
        Set Value</button>
    </div>

  </>
  );
}
