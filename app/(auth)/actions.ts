'use server';

//import { getUser } from '@/app/lib/data';

import { signIn } from '@/app/(auth)/auth';

export interface SigninActionState {
  status: "idle" | "in_progress" | "success" | "failed" | "invalid_data";
}

export const signin = async (
  _: SigninActionState,
  formData: FormData,
): Promise<SigninActionState> => {
  try {
    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    await signIn("credentials", {
      email: rawFormData.email,
      password: rawFormData.password,
      redirect: false,
    });

    return { status: "success"};
  } catch (error) {
    if(error) {
      return { status: "invalid_data" };
    }
    return { status: "failed" };
  }
};
