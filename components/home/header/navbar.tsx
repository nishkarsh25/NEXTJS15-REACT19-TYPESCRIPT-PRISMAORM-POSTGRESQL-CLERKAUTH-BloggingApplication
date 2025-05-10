"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import SearchInput from "./search-input";
import ToggleMode from "./toggle-mode";
import { Menu, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { searchAction } from "@/actions/search";




