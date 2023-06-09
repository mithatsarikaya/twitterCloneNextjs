"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { BiLoaderCircle } from "react-icons/bi";

export default function WriteTweet({ setNewTweet }) {
  const [tweet, setTweet] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let tweetCharLimit = 140;

  const { data } = useSession();
  function handleTweeting(e) {
    setTweet(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post("/api/tweets", {
        tweet: tweet,
        creator: { creatorId: data.user.id, creatorName: data.user.name },
      })
      .then((res) => {
        res.status == 201 &&
          (setNewTweet((prev) => prev + 1), setTweet(""), setIsLoading(false));
      });
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
          {tweet && (
            <span className="mr-5 pr-5 border-r-2">{tweetCharLimit}</span>
          )}
          <button
            disabled={tweetCharLimit == 140}
            className="border-2 px-2 my-2 fw-bold py-1 bg-cyan-500 ml-auto text-white  rounded-full font-medium 
            enabled:hover:bg-cyan-400
            disabled:opacity-40"
            onClick={handleSubmit}
          >
            {isLoading ? <BiLoaderCircle color="white" /> : "Tweetle"}
          </button>
        </div>
      </div>
    </div>
  );
}

//
