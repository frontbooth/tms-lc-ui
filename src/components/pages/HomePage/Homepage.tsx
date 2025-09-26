import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[var(--primary-color)]/90 flex items-center justify-center flex-col gap-4">
      <h1 className="text-[32px] font-bold text-white">Letter of Credit</h1>

      <nav className="bg-white  shadow-md rounded-md p-10 w-96 flex flex-col items-center gap-8">
        <Link
          to="/draft"
          className="text-primary-text hover:text-[var(--primary-color)] text-xl font-semibold transition-colors"
        >
          Draft
        </Link>
        <Link
          to="/issuance"
          className="text-primary-text hover:text-[var(--primary-color)] text-xl font-semibold transition-colors"
        >
          Issuance
        </Link>
        <Link
          to="/amendment"
          className="text-primary-text hover:text-[var(--primary-color)] text-xl font-semibold transition-colors"
        >
          Amendment
        </Link>
        <Link
          to="/settlement"
          className="text-primary-text hover:text-[var(--primary-color)] text-xl font-semibold transition-colors"
        >
          Settlement
        </Link>
        <Link
          to="/closure"
          className="text-primary-text hover:text-[var(--primary-color)] text-xl font-semibold transition-colors"
        >
          Closure
        </Link>
      </nav>
    </div>
  );
};

export default Homepage;
