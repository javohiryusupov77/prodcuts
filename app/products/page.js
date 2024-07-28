import Link from "next/link";
import React from "react";

export default async function Page() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <li key={p.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link
              className="text-lg font-medium text-blue-600 hover:underline"
              href={`/products/${p.id}`}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
