export default function Modal({ comment, onClose }) {
  // Mock niceness score and feedback
  const nicenessScore = Math.floor(Math.random() * 100);
  const feedback =
    nicenessScore > 75
      ? "Great job! That was very kind."
      : nicenessScore > 50
        ? "Nice comment! Could be a bit more positive."
        : "Hmm, maybe try to be more encouraging next time.";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Comment Analysis</h2>
        <div className="space-y-4">
          <div>
            {/* <h3 className="font-medium">Your Comment:</h3> */}
            <div className="bg-gray-100 p-3">
              <p className="text-sm text-gray-600 italic">{comment}</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium">Niceness Score:</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: `${nicenessScore}%`,
                  backgroundColor:
                    nicenessScore > 75
                      ? "#4ade80"
                      : nicenessScore > 50
                        ? "#fbbf24"
                        : "#f87171",
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{nicenessScore}/100</p>
          </div>
          <div>
            <h3 className="font-medium">Feedback:</h3>
            <p className="text-gray-600">{feedback}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
