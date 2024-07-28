import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-red-600 animate-pulse">not-found</h2>
      <p className="mt-4 text-lg text-gray-700">Could not found requested resource</p>
      <Link href="/" className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 animate-shake">
        Return Home
      </Link>
    </div>
  );
}
