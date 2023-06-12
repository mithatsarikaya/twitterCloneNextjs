"use client";
import Tweets from "./components/Tweets";
import Sidebar from "./components/Sidebar";
import WriteTweet from "./components/WriteTweet";
import LoginRegisterBottom from "./components/LoginRegisterBottom";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  // const [tweets, setTweets] = useState({});
  const session = useSession();
  const [newTweet, setNewTweet] = useState(0);

  // axios.get("/api/tweets").then((res) => {
  //   console.log(res);
  // });

  return (
    <div className="flex items-start bg-white mx-20 w-100 h-auto">
      {/* sidebar */}

      <Sidebar />
      {/* sidebar */}
      {/* <div>{JSON.stringify(tweets)}</div> */}

      {/* MAIN */}
      <div className="bg-white w-5/12 border-x-2 h-auto pt-3">
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

        {session.status === "authenticated" && (
          <WriteTweet setNewTweet={setNewTweet} />
        )}

        {/* WRITE TWEET */}

        {/* JUST TWEET */}

        <Tweets newTweet={newTweet} setNewTweet={setNewTweet} />
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
