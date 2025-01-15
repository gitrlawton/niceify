export default function About() {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center relative">
      <div className="max-w-2xl mx-auto p-4">
        <a
          href="/"
          className="absolute top-6 left-8 text-black-500 hover:text-gray-600"
        >
          ← Back
        </a>
        <h1 className="text-2xl font-bold mb-4">About Niceify</h1>
        <p className="mb-4">
          If you need to practice being nicer to others online, you've come to
          the right place.
        </p>
        <p className="mb-4">
          Niceify is an interactive web application designed to help users
          practice kindness on social media. This app simulates social media
          posts and provides feedback on how nice your comments are.
        </p>
        <p className="mb-4">
          When you write a comment, our AI analyzes it and provides a "Niceness
          Score" along with constructive feedback to help you improve your
          online interactions.
        </p>
        <p className="mb-4">
          The goal of Niceify is to promote positive communication and help
          create a kinder online environment for everyone.
        </p>
        <p className="mb-4">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/rlawton714/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            Ryan Lawton
          </a>{" "}
          using{" "}
          <a
            href="https://codebuff.com/referrals/ref-74314514-f658-450b-9fcc-f8c841b0711d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            codebuff
          </a>
          .
        </p>
      </div>
    </div>
  );
}
