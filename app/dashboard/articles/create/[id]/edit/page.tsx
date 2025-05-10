import EditArticlePage from "@/components/articles/edit-article-page";
import { prisma } from "@/lib/prisma";
import React from "react";

type EditArticleParams = {
  params: Promise<{ id: string }>;
};




