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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-bold text-2xl">Blog Dashboard</h1>
          <p>Manage Your content and analytics</p>
        </div>

        <Link href={"/dashboard/articles/create"}>
          <PlusCircle className="h-4 w-4" />
          <Button>New article</Button>
        </Link>
      </div>

      {/* Quick stats */}
      <div className="grid md:grid-cols-3 mb-8 gap-4 ">
        

        

        
      </div>

      
    </main>
  );
};


