"use client";
import { useUserDetailContext } from "@/app/provider";
import EmailTemplateList from "@/components/custom/EmailTemplateList";
import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import React from "react";

function Dashboard() {
  const { userDetail, setUserDetail } = useUserDetailContext();
  return (
    <div>
      <Header />
      <div className="p-10 md:px-28 lg:px-56 mt-16">
        <div className="flex justify-between items-center">
          <h2 className="front-bold text-3xl">Hello, {userDetail?.name}</h2>
          <Button>+ Create New Email Template</Button>
        </div>
        <EmailTemplateList />
      </div>
    </div>
  );
}

export default Dashboard;
