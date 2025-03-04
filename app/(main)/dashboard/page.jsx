"use client";
import { useUserDetail } from "@/app/provider";
import EmailTemplateList from "@/components/custom/EmailTemplateList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Dashboard() {
  const { userDetail, setUserDetail } = useUserDetail();

  return (
    <div>
      <div className="p-2 md:px-28 lg:px-56 mt-5">
        <div className="flex justify-between items-center">
          <h2 className="front-bold text-3xl">Hello, {userDetail?.name}</h2>
          <Link href={"/dashboard/create"}>
            <Button>+ Create New Email Template</Button>
          </Link>
        </div>
        <EmailTemplateList />
      </div>
    </div>
  );
}

export default Dashboard;
