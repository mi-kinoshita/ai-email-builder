import { GenerateEmailTemplateAIModel } from "@/config/AIModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();
  try {
    const result = await GenerateEmailTemplateAIModel.sendMessage(prompt);
    const aiResp = await result.response.text(); // Add `await` to retrieve the response

    console.log(aiResp);
    const parsedAiResp = JSON.parse(aiResp);
    return new NextResponse(JSON.stringify(parsedAiResp), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log("ERROR IN ROUTE:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// generate the email template for notify people with new pricing model for website.
