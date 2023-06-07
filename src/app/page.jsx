"use client";
import Tweet from "./components/Tweet";
import Sidebar from "./components/Sidebar";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
export default function Home() {
  const session = useSession();
  console.log(session);

  return (
    <div className="flex bg-white mx-20 w-100 h-screen">
      {/* sidebar */}

      <Sidebar />
      {/* sidebar */}

      {session.status === "authenticated" && (
        <button onClick={signOut}>Logout</button>
      )}
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
        <div className="pl-4  pr-4 border-b-2 flex gap-3 h-30 ">
          <div className=" h-10 w-10 bg-cyan-600 rounded-full mt-5"></div>
          <div className="flex-grow">
            <input
              className="w-full  h-20 border-b-2 pr-2 focus:outline-none"
              placeholder="Neler oluyor?"
              type="text"
            />
            <div className="float-right">
              <span className="mr-5 pr-5 border-r-2">140</span>
              <button className="border-2 px-2 my-2 fw-bold py-1 bg-cyan-500 ml-auto text-white  rounded-full font-medium hover:bg-cyan-400">
                Tweetle
              </button>
            </div>
          </div>
        </div>

        {/* WRITE TWEET */}

        {/* JUST TWEET */}

        <Tweet />
        {/* JUST TWEET */}
      </div>
      {/* MAIN */}
      <div className=" w-4/12"></div>
      {/* FIXED BOTTOM THING */}
      <div className="w-screen h-100 bg-[#1d9bf0] left-0 bottom-0 fixed">
        <div className="text-white flex items-center justify-evenly">
          <div className="py-3">
            <p className="text-xl font-bold">Don't miss what's happening</p>
            <span className="test-sm">
              People on Twitter are the first to know
            </span>
          </div>
          <div>
            <Link href="/login">
              <button className="border-2 rounded-full px-2 py-1 mr-1 font-bold hover:bg-blue-400">
                Log in{" "}
              </button>
            </Link>
            <Link href="/register">
              <button className=" bg-white border-slate-200 text-black border-2 rounded-full px-2 py-1 mr-1 hover:bg-slate-300">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* FIXED BOTTOM THING */}
    </div>
  );
}
