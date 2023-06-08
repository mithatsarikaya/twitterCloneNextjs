"use client";
import Link from "next/link";
import Tweet from "./components/Tweet";
import Sidebar from "./components/Sidebar";
import WriteTweet from "./components/WriteTweet";
import LoginRegisterBottom from "./components/LoginRegisterBottom";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <div className="flex bg-white mx-20 w-100 h-screen">
      {/* sidebar */}

      <Sidebar />
      {/* sidebar */}

      {/* MAIN */}
      <div className="bg-white w-5/12 border-x-2 pt-3">
        <div className="pl-4">
          <h1 className="font-bold text-xl  cursor-pointer">Anasayfa</h1>
        </div>
        <div className="mt-4 flex font-bold border-b-2">
          <button className="hover:bg-slate-200  flex-1 text-sm h-10">
            Sana Özel
          </button>
          <button className="hover:bg-slate-200 flex-1 text-sm">
            Takip Edilenler
          </button>
        </div>

        {/* WRITE TWEET */}

        {session.status === "authenticated" && <WriteTweet />}

        {/* WRITE TWEET */}

        {/* JUST TWEET */}

        <Tweet />
        {/* JUST TWEET */}
      </div>
      {/* MAIN */}
      <div className=" w-4/12"></div>
      {/* when no user  FIXED BOTTOM THING */}

      {session.status === "unauthenticated" && <LoginRegisterBottom />}

      {/* when no user  FIXED BOTTOM THING */}
    </div>
  );
}
