import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { fetchArticleByQuery } from "@/lib/query/fetch-article-by-query";
import { Search } from "lucide-react";
import { Prisma } from "@prisma/client";

type AllArticlePageProps = {
  articles: Prisma.ArticlesGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>[];
};

const AllArticlePage: React.FC<AllArticlePageProps> = async ({ articles }) => {
  

  if (articles.length <= 0) {
    return <NoSearchResults />;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        
      ))}
    </div>
  );
};

export default AllArticlePage;


