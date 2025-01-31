"use client"
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Circle } from "lucide-react";

const categories = [
  "Electronics",
  "Fashion",
  "Health & Beauty",
  "Home & Garden",
  "Sports & Outdoors",
  "Toys & Games",
  "Food & Beverages",
  "Travel & Leisure",
  "Automotive",
  "Books & Media",
  "Pet Supplies"
];

const CategoryNav = () => {
  const handleAllow = () => {
    // Add your handler logic here
    console.log("Allow clicked");
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Card className="p-4 w-[800px] max-w-[90vw]">
           
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <div key={category} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                    <Circle className="w-4 h-4 text-gray-500" />
                    <span>{category}</span>
                  </div>
                ))}
              </div>
            </Card>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryNav;