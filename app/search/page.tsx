"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { searchItems } from "@/services/api";
import ProductCard from "@/components/ProductCard";

const SearchPage = () => {
  const [items, setItems] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await searchItems(query);
        setItems(data.items);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <div className="product-list">
        {items.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

// Envolver con Suspense
export default function SearchPageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchPage />
    </Suspense>
  );
}
