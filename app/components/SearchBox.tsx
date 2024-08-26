/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/SearchBox.module.css";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBox}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Nunca dejes de buscar"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        <img
          src="/search.png"
          alt="Buscar en Mercadolibre"
          className={styles.searchIcon}
        />
      </button>
    </form>
  );
};

export default SearchBox;
