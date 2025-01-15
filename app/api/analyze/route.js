import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({});

export async function POST(request) {
  try {
    const { postContent, comment } = await request.json();

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a niceness analyzer. Analyze how nice this response is to the following social media post.
                 Rate the comment on a scale from 0-100 for how nice it is, where 0 is very unkind and 100 is extremely kind.
                 Consider both the content of the original post and the comment. Provide the score as a number and brief 
                 feedback in the format: "SCORE: [number] FEEDBACK: [your feedback]". Make sure to inform
                 the user how they can make their comment more nice, WITHOUT providing examples.  
                 
                 Note: If the comment is neutral, the score should be 50. 
                 Important: Do not refer to the commentor, use "you" instead.`,
        },
        {
          role: "user",
          content: `Original Post: ${postContent}\n\nComment: ${comment}`,
        },
      ],
      model: "llama3-70b-8192",
    });

    const result = response.choices[0].message.content;
    const scoreMatch = result.match(/SCORE:\s*(\d+)/);
    const feedbackMatch = result.match(/FEEDBACK:\s*(.+)/);

    if (scoreMatch && feedbackMatch) {
      return NextResponse.json({
        score: parseInt(scoreMatch[1]),
        feedback: feedbackMatch[1],
      });
    }

    throw new Error("Invalid response format from Groq");
  } catch (error) {
    console.error("Error analyzing comment:", error);
    return NextResponse.json(
      { error: "Failed to analyze comment" },
      { status: 500 }
    );
  }
}
