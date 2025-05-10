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
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        
      </div>
    </form>
  );
};

