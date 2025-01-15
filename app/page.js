"use client";

import Card from "./components/Card";
import { useState, useEffect } from "react";

const mockPosts = [
  {
    username: "John Doe",
    platform: "Twitter",
    content: " ",
    avatar: "/twitter-avatar.png",
    timestamp: "2h",
    likes: 42,
    retweets: 12,
  },
  {
    username: "Jane Smith",
    platform: "Instagram",
    content: " ",
    avatar: "/instagram-avatar.png",
    likes: 256,
    timestamp: "4h",
  },
  {
    username: "Tech Guru",
    platform: "LinkedIn",
    content: " ",
    avatar: "/linkedin-avatar.png",
    reactions: 78,
    comments: 12,
    timestamp: "1d",
  },
  {
    username: "FoodieFan",
    platform: "Facebook",
    content: " ",
    avatar: "/facebook-avatar.png",
    likes: 123,
    shares: 45,
    timestamp: "3h",
  },
  {
    username: "GamerPro",
    platform: "Reddit",
    content: " ",
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
    const handleNextPost = () => {
      console.log("nextPost event received");
      handleNext();
    };
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
      <div className="absolute top-4 left-8">
        <h1 className="text-3xl font-dancing-script text-black-500">Niceify</h1>
      </div>
      <a
        href="/about"
        className="absolute top-6 right-8 text-black-500 hover:text-gray-600"
      >
        About
      </a>{" "}
      <div
        className={animationClass}
        onAnimationEnd={() => setAnimationClass("")}
      >
        <Card post={mockPosts[currentPost]} />
      </div>
    </main>
  );
}
