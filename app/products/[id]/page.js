import React from 'react';

export default async function Page({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
      <p className="text-xl text-green-500">${product.price}</p>
      <p className="text-gray-700">{product.description}</p>
      <div className="w-full h-64">
        <img
          className="w-full h-full object-contain rounded-md"
          src={product.image}
          alt={product.title}
        />
      </div>
    </div>
  );
}
