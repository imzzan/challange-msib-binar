"use client";
import React, { useState } from "react";
import { Button, Input } from "..";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FormLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("member");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" && password === "") {
      setMessage("Email or Password is incorrect");
    } else {
      window.localStorage.setItem("token", email);
      router.push("/cari-mobil");
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" container mt-3">
      <p className=" text-danger text-center">{message}</p>
      <div className=" d-flex flex-column gap-3">
        <Input
          label="Email"
          name="nmail"
          type="email"
          placeHolder="Email"
          costomeStyle=" w-100"
          handleChange={emailChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeHolder="Password"
          costomeStyle=" w-100"
          handleChange={passwordChange}
        />
      </div>
      <Button
        nameBtn="Sign up"
        variant="btn-primary"
        costomeStyle="w-100 mt-3"
      />
      <Link href="/register" className="text-decoration-none">
        <p className="mt-3">Have an account?</p>
      </Link>
    </form>
  );
};

export default FormLogin;
