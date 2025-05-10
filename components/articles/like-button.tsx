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

  const handleLikeDislike = async () => {
    startTransition(async () => {
      setOptimisticLike(isLiked ? optimisticLike - 1 : optimisticLike + 1); //optimistic ui update
      await likeDislikeToggle(articleId);
    });
  };

  return (
    <div className="flex gap-4 mb-12 border-t pt-8">
      <form action={handleLikeDislike}>
        
      </form>

      

      
    </div>
  );
};


