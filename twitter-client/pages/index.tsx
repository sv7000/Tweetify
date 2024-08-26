import FeedCard from "@/components/FeedCard";
import { Inter } from "next/font/google";
import React from "react";
import {
  FaTwitter,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaUser,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <IoHome />,
  },
  {
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    title: "Notifications",
    icon: <FaBell />,
  },
  {
    title: "Messages",
    icon: <FaEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <FaBookmark />,
  },
  {
    title: "Profile",
    icon: <FaUser />,
  },
];

export default function Home() {
  return (
    <div className="h-screen w-screen grid grid-cols-12 px-56">
      <div className="col-span-3  ">
        <div className="text-4xl p-2 hover:bg-gray-700 h-fit w-fit rounded-full transition-all mt-4 cursor-pointer">
          <FaTwitter />
        </div>
        <div className="mt-4 font-semibold">
          <ul>
            {SidebarMenuItems.map((item) => (
              <li
                className="flex justify-start items-center gap-2 hover:bg-gray-700 rounded-full py-2 px-4 cursor-pointer transition-all w-fit"
                key={item.title}
              >
                {" "}
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#1d9bf0] px-16 py-2 rounded-full mt-8 ml-4 hover:bg-sky-400">
            Tweet
          </button>
        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-slate-800">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
