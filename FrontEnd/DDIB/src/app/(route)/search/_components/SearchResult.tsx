"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductSearch } from "@/app/_api/product";
import { Product } from "@/app/_types/types";

interface Props {
  keyword: string;
}

export default function SearchResult({ keyword }: Props) {
  const { data } = useQuery<Product[]>({
    queryKey: ["category", keyword, ""],
    queryFn: () => getProductSearch("", ""),
  });
  return <></>;
}
