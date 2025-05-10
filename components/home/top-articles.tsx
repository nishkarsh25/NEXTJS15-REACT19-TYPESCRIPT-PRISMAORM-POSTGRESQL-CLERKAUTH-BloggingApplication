import { cn } from "@/lib/utils";
import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { prisma } from "@/lib/prisma";

type Props = {};

const TopArticles = async (props: Props) => {
  const articles = await prisma.articles.findMany({
    orderBy: {
      createdAt: "desc",
    },

    include: {
      comments: true,
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
      {articles.slice(0, 3).map((article) => (
        
      ))}
    </div>
  );
};


