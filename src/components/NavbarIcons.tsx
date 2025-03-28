"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import NotifyCard from "./NotifyCard";

const NavbarIcons = () => {
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [showNotifyCard, setShowNotifyCard] = useState(false);

  const isLoggedin = true; //temp
  const router = useRouter();

  const handleNotificationClick = () => {
    setShowNotifyCard(true);
  };
  const handleprofileClick = () => {
    if (!isLoggedin) {
      router.push("/login");
    }
    setisProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-end gap-4 xl:gap-6 relative">
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleNotificationClick}
        id="notification-icon"
      ></Image>
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleprofileClick}
      ></Image>
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[rgba(0,0,0,0.2)_0px_3px_10px]">
          <Link href="/" className="hover:font-semibold">
            Profile
          </Link>
          <div
            className="mt-2 cursor-pointer hover:font-semibold"
            cursor-pointer
          >
            Logout
          </div>
        </div>
      )}
      {showNotifyCard && (
        <NotifyCard onClose={() => setShowNotifyCard(false)} />
      )}
    </div>
  );
};

export default NavbarIcons;
