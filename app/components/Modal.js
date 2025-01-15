import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function Modal({ comment, post, generatedContent, onClose, showModal }) {
  const [nicenessScore, setNicenessScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (showModal) {
      // Reset all states immediately
      setNicenessScore(0);
      setFeedback("");
      setIsLoading(true);
      setShowConfetti(false);
      
      // Force a re-render before showing the modal
      setTimeout(() => {
        setNicenessScore(0);
        setFeedback("");
      }, 0);
    }
  }, [showModal]);

  // Reset state when modal opens
  useEffect(() => {
    if (showModal) {
      // Reset all states immediately
      setNicenessScore(0);
      setFeedback("");
      setIsLoading(true);
      setShowConfetti(false);
      
      // Force a re-render before showing the modal
      setTimeout(() => {
        setNicenessScore(0);
        setFeedback("");
      }, 0);
    }
  }, [showModal]);

  useEffect(() => {
    const analyzeComment = async () => {
      try {
        const response = await fetch("/api/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ comment, postContent: generatedContent }),
        });

        if (!response.ok) {
          throw new Error("Failed to analyze comment");
        }

        const { score, feedback } = await response.json();
        setNicenessScore(score);
        setFeedback(feedback);
        if (score >= 80) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000); // Show confetti for 5 seconds
        }
      } catch (error) {
        console.error("Error analyzing comment:", error);
        setNicenessScore(50);
        setFeedback("Error analyzing comment. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    analyzeComment();
  }, [comment]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      {showConfetti && <Confetti />}
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Comment Analysis</h2>
        <div className="space-y-4">
          <div>
            {/* <h3 className="font-medium">Your Comment:</h3> */}
            <div className="bg-gray-100 p-3">
              <p className="text-sm text-gray-600 italic">{comment}</p>
            </div>
          </div>
          {isLoading ? (
            <div className="flex flex-col items-center space-y-4 py-4">
              <p className="text-gray-600">Generating Analysis...</p>
              <svg
                className="animate-spin h-8 w-8 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Niceness Score:</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="h-2.5 rounded-full"
                    style={{
                      width: `${nicenessScore}%`,
                      backgroundColor:
                        nicenessScore > 79
                          ? "#166534" // Dark green for extremely high scores
                          : nicenessScore > 60
                            ? "#4ade80" // Bright green for high scores
                            : nicenessScore > 39
                              ? "#6B7280" // Gray for medium scores
                              : nicenessScore > 20
                                ? "#f87171" // Red for low scores
                                : "#991B1B", // Dark red for extremely low scores
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {nicenessScore}/100
                </p>
              </div>
              <div>
                <h3 className="font-medium">Feedback:</h3>
                <p className="text-gray-600">{feedback}</p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => {
              // Reset states before closing
              setNicenessScore(0);
              setFeedback("");
              setIsLoading(true);
              setShowConfetti(false);
              
              onClose(nicenessScore > 60);
              if (nicenessScore > 60) {
                // Trigger next post action
                const event = new CustomEvent('nextPost');
                window.dispatchEvent(event);
              }
            }}
            className={`px-4 py-2 rounded-lg ${
              nicenessScore > 60 
                ? "bg-blue-500 text-white hover:bg-blue-600" 
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {nicenessScore > 60 ? "Post" : "Retry"}
          </button>
        </div>
      </div>
    </div>
  );
}
