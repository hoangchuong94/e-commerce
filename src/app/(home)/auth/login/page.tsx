"use client";
import Link from "next/link";
import React, { useState, FormEvent, useEffect } from "react";

import { useLogin } from "@/utils/auth/auth";
import Button from "@/components/button/Button";
import FormInput from "@/components/form-field/FormInput";
import { useRouter } from "next/navigation";
import { StateUserProps } from "@/type/type";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/sliceLogin";

const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    pattern: "^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$",
    errorMessage:
      "user name does not contain characters, spaces, minimum length 8",
    required: true,
  },
  {
    id: 5,
    name: "password",
    type: "password",
    placeholder: "Password",
    pattern:
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
    errorMessage:
      "The name must contain at least 1 number, 1 character, 1 uppercase letter, 1 lowercase letter, minimum length 8",
    required: true,
  },
];
const LoginPage = function () {
  const { login, isLoading, error } = useLogin();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.account);
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const redirecByUserLogin = (
    user: StateUserProps,
    router: AppRouterInstance
  ) => {
    if (user.isAdmin) {
      router.push("/admin");
    } else {
      router.back();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await login(value.username, value.password);
    if (user) {
      redirecByUserLogin(user, router);
    }
  };

  useEffect(() => {
    if (user.isLogin) {
      router.push("/");
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit} method="post">
      <h3>Login form</h3>
      {inputs.map((input) => (
        <FormInput key={input.id} {...input} onChange={onChange} />
      ))}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Button
          type="submit"
          text="Login"
          size="medium"
          backgroundColor="black"
          outline
        />
      )}
      <p>
        Do not have an account ?{" "}
        <Link style={{ color: "blue" }} href={"/auth/register"} replace>
          {" "}
          Register
        </Link>
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default LoginPage;
