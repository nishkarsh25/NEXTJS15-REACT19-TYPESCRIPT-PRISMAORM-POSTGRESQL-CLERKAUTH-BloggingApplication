"use client";
import React, { useOptimistic, useTransition } from "react";
import { Button } from "../ui/button";
import { Bookmark, Share2, ThumbsUp } from "lucide-react";
import { Like } from "@prisma/client";
import { likeDislikeToggle } from "@/actions/like-dislike";






