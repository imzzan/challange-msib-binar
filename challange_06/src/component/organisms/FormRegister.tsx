"use client";
import React, { useState, FC } from "react";
import { Button, Input } from "..";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const FormRegister: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const confPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfPassword(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(name === '' && email === '') {
      setMessage("Please complate this form")
    } else if (password !== confPassword) {
      setMessage("Password is incorrect")
    } else {
       router.push('/login')
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" container mt-3">
      <p className=" text-danger text-center">{message}</p>
      <div className=" d-flex flex-column gap-3">
        <Input
          label="Nama Lengkap"
          name="name"
          type="text"
          placeHolder="Nama Lengkap"
          costomeStyle=" w-100"
          handleChange={nameChange}
        />
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
        <Input
          label="Confirm Password"
          name="confPassword"
          type="password"
          placeHolder="Confirm Password"
          costomeStyle=" w-100"
          handleChange={confPasswordChange}
        />
      </div>
      <Button
        nameBtn="Sign In"
        variant="btn-primary"
        costomeStyle="w-100 mt-3"
      />
      <Link href="/login" className="text-decoration-none">
        <p className="mt-3">Have an account?</p>
      </Link>
    </form>
  );
};

export default FormRegister;
