"use client";
import React, { useOptimistic, useTransition } from "react";
import { Button } from "../ui/button";
import { Bookmark, Share2, ThumbsUp } from "lucide-react";
import { Like } from "@prisma/client";
import { likeDislikeToggle } from "@/actions/like-dislike";

type LikeButtonProps = {
  articleId: string;
  likes: Like[];
  isLiked: Boolean;
};

const LikeButton: React.FC<LikeButtonProps> = ({
  articleId,
  likes,
  isLiked,
}) => {
  const [optimisticLike, setOptimisticLike] = useOptimistic(likes.length);
  const [isPending, startTransition] = useTransition();

  

  
};


