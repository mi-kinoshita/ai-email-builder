"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import SignInButton from "./SignInButton";
import { useUserDetail, useUserDetailContext } from "@/app/provider";
import Link from "next/link";

function Hero() {
  const { userDetail, setUserDetail } = useUserDetail();
  return (
    <div
      className="px-5 md:px-28 lg:px-44 xl:px-56
    flex flex-col items-center
    mt-10
    "
    >
      <h2
        className="font-extrabold
         text-5xl text-center
        "
      >
        AI-Powered
        <span className="text-primary"> Email Templates</span>
      </h2>

      <p className="text-center mt-4">
        Longing to impress clients with AI-powered emails but don't have enough
        time to build them on your own?
      </p>
      <div className="flex gap-5 mt-6">
        <Link href={"/demo"} passHref>
          <Button variant="outline">Try Demo</Button>
        </Link>
        <div>
          {userDetail?.email ? (
            <div className="flex gap-3 items-center">
              <Link href={"/dashboard"}>
                <Button>Dashboard</Button>
              </Link>
            </div>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
      <Image
        src="/images/swiftmailss.png"
        alt="landing"
        width={1000}
        height={800}
        className="mt-12 "
      />
    </div>
  );
}

export default Hero;
