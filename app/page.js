"use client";

import Card from "./components/Card";
import { useState, useEffect } from "react";

const mockPosts = [
  {
    username: "JohnDoe",
    platform: "Twitter",
    content: "Having a rough day today...",
    avatar: "/twitter-avatar.png",
    timestamp: "2h",
    likes: 42,
    retweets: 12,
  },
  {
    username: "JaneSmith",
    platform: "Instagram",
    content: "Just got this new haircut! What do you think?",
    avatar: "/instagram-avatar.png",
    likes: 256,
    timestamp: "4h",
  },
  {
    username: "TechGuru",
    platform: "LinkedIn",
    content: "Excited to share my latest article on AI trends!",
    avatar: "/linkedin-avatar.png",
    reactions: 78,
    comments: 12,
    timestamp: "1d",
  },
  {
    username: "FoodieFan",
    platform: "Facebook",
    content: "Check out this amazing recipe I tried!",
    avatar: "/facebook-avatar.png",
    likes: 123,
    shares: 45,
    timestamp: "3h",
  },
  {
    username: "GamerPro",
    platform: "Reddit",
    content: "What's your favorite indie game of the year?",
    avatar: "/reddit-avatar.png",
    upvotes: 789,
    comments: 56,
    timestamp: "5h",
  },
];
export default function Home() {
  const [currentPost, setCurrentPost] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleNext = () => {
    setAnimationClass("card-swap-next");
    setTimeout(() => {
      setCurrentPost((prev) => (prev + 1) % mockPosts.length);
    }, 250); // Halfway through the animation
  };

  useEffect(() => {
    const handleNextPost = () => handleNext();
    window.addEventListener("nextPost", handleNextPost);
    return () => window.removeEventListener("nextPost", handleNextPost);
  }, [handleNext]);

  const handlePrevious = () => {
    setAnimationClass("card-swap-prev");
    setTimeout(() => {
      setCurrentPost((prev) => (prev === 0 ? mockPosts.length - 1 : prev - 1));
    }, 250); // Halfway through the animation
  };

  return (
    <main className="bg-cream min-h-screen flex flex-col items-center justify-center p-4 relative">
      <a
        href="/about"
        className="absolute top-4 right-8 text-black-500 hover:text-gray-600"
      >
        About
      </a>{" "}
      <div
        className={animationClass}
        onAnimationEnd={() => setAnimationClass("")}
      >
        <Card post={mockPosts[currentPost]} />
      </div>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handlePrevious}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next →
        </button>
      </div>
    </main>
  );
}
