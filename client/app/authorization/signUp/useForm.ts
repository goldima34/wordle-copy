import { Resolver } from "react-hook-form";

export type FormValues = {
  username: string;
  password: string;
  confirmPassword: string;
};

export const resolver: Resolver<FormValues> = async (values) => {
  const errors: Record<string, any> = {};

  // Validate username
  if (!values.username) {
    errors.username = {
      type: "required",
      message: "Username is required.",
    };
  }

  // Validate password
  if (!values.password) {
    errors.password = {
      type: "required",
      message: "Password is required.",
    };
  }

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};
