"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function WriteTweet() {
  const [tweet, setTweet] = useState("");
  console.log(tweet);
  let tweetCharLimit = 140;

  const { data } = useSession();
  console.log(data);
  function handleTweeting(e) {
    setTweet(e.target.value);
    let tweetLength = e.target.value.length;
    console.log(tweetLength);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("tweet");

    // const res = await fetch("/api/tweets", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // console.log({ res });

    axios
      .post("/api/tweets", {
        tweet: tweet,
        creator: { creatorId: data.user.id, creatorName: data.user.name },
      })
      .then((res) => console.log({ res }));
  }

  tweetCharLimit = tweetCharLimit - tweet?.length;
  return (
    <div className="pl-4  pr-4 border-b-2 flex gap-3 h-30 ">
      <div className=" h-10 w-10 bg-cyan-600 rounded-full mt-5"></div>
      <div className="flex-grow">
        <textarea
          className="w-full  h-auto border-b-2 mt-5 pr-2 focus:outline-none resize-none"
          placeholder="Neler oluyor?"
          type="text"
          value={tweet}
          onChange={handleTweeting}
          maxLength={140}
          rows={3}
        />
        <div className="float-right">
          <span className="mr-5 pr-5 border-r-2">{tweetCharLimit}</span>
          <button
            disabled={tweetCharLimit == 140}
            className="border-2 px-2 my-2 fw-bold py-1 bg-cyan-500 ml-auto text-white  rounded-full font-medium 
            enabled:hover:bg-cyan-400
            disabled:opacity-40"
            onClick={handleSubmit}
          >
            Tweetle
          </button>
        </div>
      </div>
    </div>
  );
}
