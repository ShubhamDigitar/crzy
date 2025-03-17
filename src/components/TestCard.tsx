"use client"
import { useEffect, useState } from 'react';

interface Product {
  product_photo: string;
  product_title: string;
  product_price: string;
  product_url: string;
  product_description: string;
}

const TestCard = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const url = 'https://real-time-amazon-data.p.rapidapi.com/product-details?asin=B07ZPKBL9V&country=US';

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
      'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST || ''
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Fetching product...');
        const response = await fetch(url, options);
        console.log('Response:', response);
        const result = await response.json();
        console.log('Result:', result);
        setProduct(result.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="border rounded-lg p-4 shadow-lg max-w-md">
      <img src={product.product_photo} alt={product.product_title} className="w-full h-64 object-contain rounded-lg" />
      <h2 className="text-lg font-bold mt-4">{product.product_title}</h2>
      <p className="text-green-600 font-semibold mt-2">Price: {product.product_price || 'N/A'}</p>
      <a href={product.product_url} target="_blank" className="text-blue-500 underline mt-4 block">
        View Product
      </a>
    </div>
  );
};

export default TestCard;
