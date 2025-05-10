"use client"
import DashBoard from "@/app/dashboard/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BarChart,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LeftSidebar = () => {
  const [isOpen, setIsOpen ] = useState(false);
  return (
    <div>
      <Sheet open ={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant={"outline"} className="md:hidden m-4 ">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="w-[250px]">
          <DashboardSidebar />
        </SheetContent>
      </Sheet>


      <div className="hidden md:block h-screen w-[250px] border-r bg-background ">
        <DashboardSidebar/>
      </div>
    </div>
  );
};




