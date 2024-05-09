"use client";

import styles from "./searcch.module.scss";
import React, { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchResult from "./_components/searchResult";

export default function search() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState("");
  const [searchResult, setSearchResult] = useState(true);

  const searchKeyWord = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchRef.current) {
        setResult(searchRef.current.value);
        searchRef.current.value = "";
        setSearchResult(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchTitle}>Search</div>
      <div className={styles.searchInput}>
        <input type="text" ref={searchRef} onKeyDown={searchKeyWord} />
        <IoSearchOutline className={styles.icons} />
      </div>
      <div>
        {!searchResult && (
          <>
            <div className={styles.result}>"{result}"로 검색한 결과입니다.</div>
            <SearchResult keyword={result} />
          </>
        )}
      </div>
    </div>
  );
}
