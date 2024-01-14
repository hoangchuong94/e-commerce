"use client";
import React, { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import Button from "@/components/button/Button";
import FormInput from "@/components/form-field/FormInput";
import { useRegistration } from "@/utils/auth/auth";
import { StateUserProps } from "@/type/type";
import { RootState } from "@/lib/redux/sliceLogin";
import { useSelector } from "react-redux";

const RegisterPage = () => {
  const router = useRouter();
  const { register, error, isLoading } = useRegistration();
  const [value, setValue] = useState({
    fullName: "",
    phoneNumber: "",
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      pattern: "^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$",
      errorMessage:
        "full name does not contain characters or numbers, minimum length is 4",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "Username",
      pattern: "^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$",
      errorMessage:
        "user name does not contain characters, spaces, minimum length 8",
      required: true,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      pattern: "^0\\d{9,10}$",
      errorMessage: "Phone number format is incorrect",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      pattern: "[a-z0-9]+@[a-z]+\\.[a-z]{2,3}",
      errorMessage: "Email format is incorrect",
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
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password authentication is not correct",
      pattern: value.password,
      required: true,
    },
  ];

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

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userRegister = {
      fullName: value.fullName,
      username: value.username,
      phoneNumber: value.phoneNumber,
      email: value.email,
      password: value.password,
      gender: value.gender,
    };
    const user = await register(userRegister);
    if (user) {
      redirecByUserLogin(user, router);
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue({ ...value, gender: e.target.value });
  };
  return (
    <>
      <form action="" onSubmit={handleRegister} method="post">
        <h3>REGISTRATION FORM</h3>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} onChange={onChangeInput} />
        ))}
        <select name="gender" required onChange={onChangeSelect}>
          <option value="">Gender</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="other">Other</option>
        </select>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Button
            text="Register"
            size="medium"
            backgroundColor="black"
            outline
          />
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>
          you already have an account ?{" "}
          <Link style={{ color: "blue" }} href={"/auth/login"}>
            {" "}
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default RegisterPage;
