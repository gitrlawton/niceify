import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request) {
  try {
    const { comment, postContent } = await request.json();

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a kindness enhancer. Rewrite the following comment to be kinder, more empathetic, and 
          positive while maintaining its original meaning and context with the post. Keep the tone 
          natural and conversational. Return only the rewritten comment without any additional text.
          Important: Limit the comment to a maximum of 3 sentences.`,
        },
        {
          role: "user",
          content: `Original Post: ${postContent}\n\nComment to Niceify: ${comment}`,
        },
      ],
      model: "llama3-70b-8192",
    });

    const niceifiedComment = response.choices[0].message.content;
    return NextResponse.json({ niceifiedComment });
  } catch (error) {
    console.error("Error niceifying comment:", error);
    return NextResponse.json(
      { error: "Failed to niceify comment" },
      { status: 500 }
    );
  }
}
