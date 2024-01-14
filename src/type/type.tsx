import { ReactNode } from "react";

export interface BackgroundProps {
  url: string;
  type: string;
  title?: string;
  detail?: string;
  description?: string;
}

export interface ButtonProps {
  outline?: boolean;
  text?: string;
  backgroundColor?: string;
  size?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface UserProps {
  fullName: string;
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
  gender: string;
}

export interface FormInputProps {
  id: number;
  name: string;
  placeholder: string;
  type: string;
  errorMessage: string;
  required: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface StateUserProps {
  username: string;
  isLogin: boolean;
  isAdmin: boolean;
}

export interface JwtUser {
  admin: boolean;
  exp: Date;
  iat: Date;
  sub: string;
}
