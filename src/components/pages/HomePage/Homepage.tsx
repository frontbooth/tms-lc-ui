import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Navigation */}
      <nav className="w-full max-w-4xl bg-white shadow-md rounded-md mb-10 p-4 flex justify-center gap-6">
        <Link
          to="/draft"
          className="text-gray-700 hover:text-[var(--primary-color)] font-medium transition-colors"
        >
          Draft
        </Link>
        <Link
          to="/issuance"
          className="text-gray-700 hover:text-[var(--primary-color)] font-medium transition-colors"
        >
          Issuance
        </Link>
        <Link
          to="/amendment"
          className="text-gray-700 hover:text-[var(--primary-color)] font-medium transition-colors"
        >
          Amendment
        </Link>
        <Link
          to="/settlement"
          className="text-gray-700 hover:text-[var(--primary-color)] font-medium transition-colors"
        >
          Settlement
        </Link>
        <Link
          to="/closure"
          className="text-gray-700 hover:text-[var(--primary-color)] font-medium transition-colors"
        >
          Closure
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Letter of Credit!
        </h1>
        <p className="text-gray-600 mb-6">
          Select a page from the navigation above to get started.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
