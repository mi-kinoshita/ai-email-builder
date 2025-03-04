"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useConvex } from "convex/react";
import { useUserDetail } from "@/app/provider";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import emailPic from "@/public/images/email.png";
import Image from "next/image";
import { Loader2 } from "lucide-react";

function EmailTemplateList() {
  const [emailList, setEmailList] = useState([]);
  const [loading, setLoading] = useState(true); // loadingステートを追加
  const convex = useConvex();
  const { userDetail } = useUserDetail();

  useEffect(() => {
    if (userDetail) {
      GetTemplateList();
    }
  }, [userDetail]);

  const GetTemplateList = async () => {
    setLoading(true); // データ取得前にローディングを開始
    const result = await convex.query(api.emailTemplate.GetAllUserTemplate, {
      email: userDetail?.email,
    });
    console.log(result);
    setEmailList(result);
    setLoading(false); // データ取得後にローディングを停止
  };

  const handleDelete = async (tId) => {
    setLoading(true); // 削除前にローディングを開始
    try {
      await convex.mutation(api.emailTemplate.DeleteTemplate, { tId });
      setEmailList(emailList.filter((item) => item.tId !== tId));
      setLoading(false); // 削除後にローディングを停止
    } catch (e) {
      console.error("Error deleting template:", e.message);
      setLoading(false); // エラー時にもローディングを停止
    }
  };

  return (
    <div className="flex justify-center text-xl text-primary mt-2 flex-col items-center">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="animate-spin" size={50} />
        </div>
      ) : emailList.length === 0 ? (
        <div className="flex flex-col items-center">
          <Image src={emailPic} alt="email" width={200} height={"auto"} />
          <p>Let's create a new email template!</p>
          <Link href={"/dashboard/create"}>
            <Button className="mt-8">+ Create New</Button>
          </Link>
        </div>
      ) : (
        <Table className="mt-5">
          <TableHeader>
            <TableRow className="text-gray-700">
              <TableCell>Prompt Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emailList.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Link href={`/editor/${item.tId}`}>
                      <Button>Edit</Button>
                    </Link>
                    {/* <Button onClick={() => handleDelete(item.tId)} variant="destructive">
                      Delete
                    </Button> */}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default EmailTemplateList;
