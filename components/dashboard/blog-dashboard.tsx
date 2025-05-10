import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Clock, FileText, MessageCircle, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import RecentArticles from "./recent-articles";
import { prisma } from "@/lib/prisma";

type Props = {};

const BlogDashBoard = async (props: Props) => {
  const [articles, totalComments] = await Promise.all([
    prisma.articles.findMany({
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
    }),
    prisma.comment.count(),
  ]);
  return (
    <main className="flex-1 p-4 md:p-8">
      

      

      
    </main>
  );
};


