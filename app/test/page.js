"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import Confetti from "react-confetti";

// Import Lottie JSON animations
import confettiBurstJson from "@/public/lottie/confetti-burst.json";
import clappingHandsJson from "@/public/lottie/clapping-hands.json";
import starExplosionJson from "@/public/lottie/star-explosion.json";
import trophyJson from "@/public/lottie/trophy.json";
import trophyRisingJson from "@/public/lottie/trophy-rising.json";
import medalSpinningJson from "@/public/lottie/medal-spinning.json";
import starBurstJson from "@/public/lottie/star-burst.json";

export default function AnimationTestPage() {
  const [activeAnimation, setActiveAnimation] = useState(null);

  const animations = [
    {
      name: "Confetti Burst",
      json: confettiBurstJson,
      render: () => (
        <Lottie
          animationData={confettiBurstJson}
          loop={false}
          autoplay={true}
          style={{ width: 300, height: 300 }}
        />
      ),
    },
    {
      name: "Clapping Hands",
      json: clappingHandsJson,
      render: () => (
        <Lottie
          animationData={clappingHandsJson}
          loop={false}
          autoplay={true}
          style={{ width: 300, height: 300 }}
        />
      ),
    },
    {
      name: "Star Explosion",
      json: starExplosionJson,
      render: () => (
        <Lottie
          animationData={starExplosionJson}
          loop={false}
          autoplay={true}
          style={{ width: 300, height: 300 }}
        />
      ),
    },
    {
      name: "Trophy",
      json: trophyJson,
      render: () => (
        <Lottie
          animationData={trophyJson}
          loop={false}
          autoplay={true}
          style={{ width: 300, height: 300 }}
        />
      ),
    },
    {
      name: "Trophy Rising",
      json: trophyRisingJson,
      render: () => (
        <Lottie
          animationData={trophyRisingJson}
          loop={false}
          autoplay={true}
          style={{ width: 300, height: 300 }}
        />
      ),
    },
    {
      name: "Medal Spinning",
      json: medalSpinningJson,
      render: () => (
        <Lottie
          animationData={medalSpinningJson}
          loop={false}
          autoplay={true}
          style={{ width: 300, height: 300 }}
        />
      ),
    },
    {
      name: "Star Burst",
      json: starBurstJson,
      render: () => (
        <Lottie
          animationData={starBurstJson}
          loop={false}
          autoplay={true}
          style={{ width: 300, height: 300 }}
        />
      ),
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Animation Test Page</h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {animations.map((animation, index) => (
          <button
            key={index}
            onClick={() => setActiveAnimation(animation)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {animation.name}
          </button>
        ))}
      </div>

      {activeAnimation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg relative">
            <button
              onClick={() => setActiveAnimation(null)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              Close
            </button>
            {activeAnimation.render()}
          </div>
        </div>
      )}
    </div>
  );
}
