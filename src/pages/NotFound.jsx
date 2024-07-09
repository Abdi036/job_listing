import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="absolute top-4 right-4"></div>
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Go to Home
      </button>
    </div>
  );
}
