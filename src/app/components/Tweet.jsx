import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Tweet({
  isOwner,
  isFavourited,
  tweet,
  userOfTheTweet,
  favCount,
  tweetId,
  setNewTweet,
  creatorId,
}) {
  const router = useRouter();
  const { data } = useSession();

  function handleDelete(tweetId) {
    axios.delete(`/api/tweets/${tweetId}`).then((res) => {
      res.status == 200 &&
        (console.log("ne oluyor babos"), setNewTweet((prev) => prev + 1));
    });
  }

  function handleFav(tweetId) {
    if (data?.user.id) {
      const favData = {
        fav: isFavourited,
      };
      axios
        .put(`/api/tweets/${tweetId}`, favData, {
          headers: {
            "Content-Type": "application/json",
            token: data.user.id,
          },
        })
        .then((res) => {
          res.status == 200 &&
            (console.log("ne oluyor babsos"), setNewTweet((prev) => prev + 1));
        });
    } else {
      router.push("/login?success=Login to fav");
    }

    //this works

    // fetch(`/api/tweets/${tweetId}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     what: `deneme`,
    //   },
    // }).then((res) => {
    //   console.log("check for problemn");

    //   res.status == 200 &&
    //     (console.log("ne oluyor babsos"), setNewTweet((prev) => prev + 1));
    //   console.log(res.status);
    // });

    //this works
  }

  return (
    <div className="px-4 border-b-2 flex  h-auto">
      <div className="h-10 w-10 bg-cyan-600 rounded-full mt-5"></div>
      <div className="flex-1 ml-2">
        <Link href={`/userpage/${creatorId}?username=${userOfTheTweet}`}>
          <h3 className="font-bold mt-2">{userOfTheTweet}</h3>
        </Link>
        {/* <p className="overflow-y  max-w-2xl break-words">{tweet}</p> */}
        {/* <textarea
          disabled
          className="disabled:outline-none disabled:bg-white block w-full  resize-none"
          value={tweet}
        /> */}
        <p className="w-fit">{tweet}</p>
        <div className="float-right flex items-center">
          {isOwner && (
            <button
              onClick={() => handleDelete(tweetId)}
              className="p-1 my-1 mr-10 rounded-full hover:bg-red-700"
            >
              <FiTrash size="20px" />
            </button>
          )}
          <span className=" pr-1  text-sm">{favCount}</span>
          {isFavourited ? (
            <button
              onClick={() => handleFav(tweetId)}
              className="p-1 my-1 rounded-full hover:bg-white "
            >
              <AiTwotoneHeart size="20px" color="red" />
            </button>
          ) : (
            <button
              onClick={() => handleFav(tweetId)}
              className="p-1 my-1 rounded-full hover:bg-red-500"
            >
              <AiOutlineHeart size="20px" />
            </button>
          )}

          {/* <span className="ml-10 pr-3  text-sm"></span> */}
        </div>
      </div>
    </div>
  );
}
