import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";
import DemoAIInputBox from "@/components/custom/DemoAIInputBox";
import Header from "@/components/custom/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Demo() {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-28 lg:px-64 xl:px-72 mt-20">
        <div className="flex items-center flex-col">
          <h2 className="font-bold text-3xl text-primary">
            CREATE NEW EMAIL TEMPLATE
          </h2>
          <p className="text-lg text-gray-500">
            Effortlessly design and customize professional AI-powered email
            templates with ease.
          </p>
          <Tabs defaultValue="AI" className="w-[500px] mt-10">
            <TabsList>
              <TabsTrigger value="AI">
                Create with AI
                <Sparkles
                  className="h-5 w-5 pl-1 "
                  strokeWidth={1.5}
                  stroke="#007BFF"
                />
              </TabsTrigger>
              <TabsTrigger value="SCRATCH">Start from Scratch</TabsTrigger>
            </TabsList>
            <TabsContent value="AI">
              <DemoAIInputBox />
            </TabsContent>
            <TabsContent value="SCRATCH">
              <div className="mt-5">
                <p className="mb-2">
                  Build your email template from the ground up. Customize every
                  detail to match your needs.
                </p>
                <Link href="/demo/editor">
                  <Button className="w-full mt-7">Create New Email</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Demo;
