"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import ProductItem from "@/components/products/ProductItem";
import { Loader2 } from "lucide-react";

export default function Search() {
  const [results, setResults] = useState([]);

  const router = useRouter();
  const params = useSearchParams();
  const query = params.get("q");

  if (query && query === "") {
    router.push("/products");
  }

  useEffect(() => {
    async function products() {
      const encodedQuery = query!.replace(/\s+/g, "-");
      const res = await fetch(`/api/products/${encodedQuery}`);
      const data = await res.json();

      setResults(data);
    }
    products();
    console.log(`Result ${results}`);
  }, [query]);

  return (
    <div className="relative top-[80px] h-full  w-full -z-[1]">
      <div className="py-6 text-center">
        <h1 className="text-4xl font-bold ">
          Showing results for{" "}
          {query && query.charAt(0).toUpperCase() + query.slice(1)}
        </h1>

        {results.length === 0 ? (
          <div className="mt-6 ">
            <Loader2 className="w-4 h-4 animate-spin" />
          </div>
        ) : results.message ? (
          <h1 className="mt-4 text-xl text-red-500">{results.message}</h1>
        ) : (
          <div className="flex justify-center flex-wrap mt-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3 font-andika">
              {results.items.map((data) => {
                return (
                  <ProductItem
                    key={data.id}
                    src="/assets/logo.svg"
                    alt=""
                    href="/"
                    name={data.name}
                    initialPrice="2599"
                    price="1999"
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
