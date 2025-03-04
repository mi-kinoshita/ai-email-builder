"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import SignInButton from "./SignInButton";
import { useUserDetail, useUserDetailContext } from "@/app/provider";
import Link from "next/link";
import logoPic from "@/public/images/logo.png";

function Header() {
  const { userDetail, setUserDetail } = useUserDetail();
  return (
    <div className="flex justify-between items-center p-4 shadow-sm px-10">
      <Link href={"/"}>
        <Image
          src={logoPic}
          alt="logo"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </Link>

      <div>
        {userDetail?.email ? (
          <div className="flex gap-3 items-center">
            <Link href={"/dashboard"}>
              <Button>Dashboard</Button>
            </Link>
            <Image
              src={userDetail?.picture}
              alt="user"
              width={35}
              height={35}
              className="rounded-full"
            />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
}

export default Header;
