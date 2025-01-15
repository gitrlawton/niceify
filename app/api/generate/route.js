import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request) {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a social media post generator. Create a realistic social media post that 
                 someone might share on platforms like Twitter, Instagram, LinkedIn,or Facebook. The post 
                 should be between 3-10 sentences and cover a variety of topics like personal achievements/struggles, 
                 opinions, or questions.
                 
                 Important: Enclose the content for the post in angle brackets.  Example: <Hey guys!...#...>
                 `,
        },
      ],
      model: "llama3-70b-8192",
    });

    const responseText = response.choices[0].message.content;
    // Extract content between angle brackets
    const contentMatch = responseText.match(/<([^>]+)>/);
    const content = contentMatch ? contentMatch[1] : responseText;
    return NextResponse.json({ content });
  } catch (error) {
    console.error("Error generating post:", error);
    return NextResponse.json(
      { error: "Failed to generate post" },
      { status: 500 }
    );
  }
}
