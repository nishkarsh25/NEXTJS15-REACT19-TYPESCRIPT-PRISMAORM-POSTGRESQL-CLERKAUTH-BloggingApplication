import AllArticlePage from "@/components/articles/all-article-page";
import ArticleSearchInput from "@/components/articles/article-search-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchArticleByQuery } from "@/lib/query/fetch-article-by-query";
import Link from "next/link";
import React, { Suspense } from "react";

type SearchPageProps = {
  searchParams: Promise<{ search?: string; page?: string }>;
};

const ITEMS_PER_PAGE = 3;

const page: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const searchText = (await searchParams).search || "";
  const currentPage = Number((await searchParams).page) || 1;

  const skip = (currentPage - 1) * ITEMS_PER_PAGE;
  const take = ITEMS_PER_PAGE;

  const { articles, total } = await fetchArticleByQuery(searchText, skip, take);

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  
};



