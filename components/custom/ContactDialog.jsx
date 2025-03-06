"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

function ContactDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Formspreeのエンドポイントにデータを送信
      const response = await fetch("https://formspree.io/f/xblgrlvy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 1000,
      }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
            <MessageSquare className="pr-2" />
            Need Help?
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Please fill out the form below to reach us.
            </DialogDescription>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Email Address:
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                {errors.email && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="message"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                {errors.message && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.message.message}
                  </span>
                )}
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ContactDialog;
