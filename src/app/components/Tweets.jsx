import axios from "axios";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
export default function Tweets({ newTweet, setNewTweet, tweetsof = "home" }) {
  const { data } = useSession();

  const [tweetsData, setTweetsData] = useState([]);

  console.log({ tweetsof });

  console.log("tweets", newTweet);
  useEffect(() => {
    if (tweetsof === "home") {
      axios.get("/api/tweets").then((res) => {
        setTweetsData(res.data);
      });
    } else if (tweetsof !== "home") {
      console.log("from not home tweet");
      axios
        .get(`/api/usertweets/${tweetsof}`)
        .then((res) => setTweetsData(res.data));
    }
  }, [newTweet]);

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
          setNewTweet={setNewTweet}
          creatorId={t.creator.creatorId}
        />
      ))}
    </>
  );
}
