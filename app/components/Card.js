import { useState } from 'react';
import Modal from './Modal';

export default function Card({ post }) {
  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setShowModal(true);
    }
  };
  const platformStyles = {
    Twitter: {
      card: "border-blue-200",
      text: "text-blue-500",
      icon: "🐦",
    },
    Instagram: {
      card: "border-pink-200",
      text: "text-pink-500",
      icon: "📸",
    },
    LinkedIn: {
      card: "border-blue-600",
      text: "text-blue-600",
      icon: "💼",
    },
    Facebook: {
      card: "border-blue-800",
      text: "text-blue-800",
      icon: "👥",
    },
    Reddit: {
      card: "border-orange-500",
      text: "text-orange-500",
      icon: "🦊",
    },
  };

  const styles = platformStyles[post.platform] || platformStyles.Twitter;

  return (
    <div
      className={`bg-zinc-50 rounded-lg shadow-lg p-6 mx-auto border-l-4 ${styles.card}`}
      style={{
        width: "446px",
        height: "552px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
          {styles.icon}
        </div>
        <div>
          <div className="font-medium">{post.username}</div>
          <div className={`text-sm ${styles.text}`}>{post.platform}</div>
          <div className="text-xs text-gray-400">{post.timestamp}</div>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto mb-4"
        style={{ maxHeight: "300px" }}
      >
        <div>{post.content}</div>
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-48 object-cover mt-4 rounded-lg"
          />
        )}
      </div>
      <div className="flex gap-4 text-sm text-gray-500 mb-4">
        {post.likes && <span>❤️ {post.likes}</span>}
        {post.retweets && <span>🔁 {post.retweets}</span>}
        {post.comments && <span>💬 {post.comments}</span>}
        {post.shares && <span>📤 {post.shares}</span>}
      </div>
      <div style={{ flexShrink: 0, marginTop: "auto" }}>
        <form onSubmit={handleSubmit} className="border-t pt-4">
          {showModal && (
            <Modal 
              comment={comment}
              onClose={() => setShowModal(false)}
            />
          )}
          <input
            type="text"
            placeholder="Write a kind comment..."
            className="w-full p-2 border rounded"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </form>
      </div>
    </div>
  );
}
