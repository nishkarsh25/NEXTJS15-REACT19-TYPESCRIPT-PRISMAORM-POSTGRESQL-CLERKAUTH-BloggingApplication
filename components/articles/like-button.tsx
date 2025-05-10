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
        <Button
          disabled={isPending}
          type="submit"
          variant={"ghost"}
          className="gap-2"
        >
          <ThumbsUp className="h-5 w-5" />0
        </Button>
      </form>

      <Button variant={"ghost"} className="gap-2">
        <Bookmark className="h-5 w-5" />
      </Button>

      <Button variant={"ghost"} className="gap-2">
        <Share2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default LikeButton;
