"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import { searchAction } from "@/actions/search";
 
const ArticleSearchInput = () => {
  const searchParams = useSearchParams();
  const searchText = searchParams.get("search") || "";
 
  return (
    <form action={searchAction} className="mx-auto max-w-2xl">
      <div className="relative">
        
      </div>
    </form>
  );
};

