import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Prisma } from "@prisma/client";

type CommentListProps = {
  comments: Prisma.CommentGetPayload<{
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

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="space-y-8 ">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4 ">
          <Avatar className="h-10 w-10">
            <AvatarImage src={comment.author.imageUrl || ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          
        </div>
      ))}
    </div>
  );
};


