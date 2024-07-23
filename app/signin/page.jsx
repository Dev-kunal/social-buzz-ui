"use client";
import React from "react";
import Logo from "../assets/Logo";

import SignInForm from "../components/SignInForm";

export default function Signin(props) {
  return (
    <>
      <div className="pt-20">
        <div className="mx-auto text-center">
          <Logo />
          <span className="text-white italic"> social-buzz</span>
        </div>
        <SignInForm />
      </div>
    </>
  );
}
