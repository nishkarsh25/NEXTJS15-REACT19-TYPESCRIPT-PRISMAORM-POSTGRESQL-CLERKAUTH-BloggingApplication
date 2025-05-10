"use client";
import React, { useActionState } from "react";
import { Input } from "../ui/input";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { createComment } from "@/actions/create-comment";

type CommentInputProps = {
  articleId: string;
};

const CommentInput: React.FC<CommentInputProps> = ({ articleId }) => {
  const [formState, action, isPending] = useActionState(
    createComment.bind(null, articleId),
    { errors: {} }
  );

  
};


