import axios from "axios";
import Tweet from "./Tweet";
import { useState } from "react";
import { useSession } from "next-auth/react";
export default function Tweets() {
  const { data } = useSession();

  const [tweetsData, setTweetsData] = useState([]);

  axios.get("/api/tweets").then((res) => {
    setTweetsData(res.data);
  });
  return (
    <>
      {tweetsData.map((t) => (
        <Tweet
          isOwner={t.creator.creatorId === data?.user.id}
          isFavourited={t.favsOfTheTweet.includes(data?.user.id)}
          favCount={t.favsOfTheTweet.length}
          tweet={t.tweet}
          userOfTheTweet={t.creator.creatorName}
          tweetId={t._id}
          key={t._id}
        />
      ))}
    </>
  );
}
