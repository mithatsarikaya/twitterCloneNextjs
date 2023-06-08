import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import axios from "axios";
export default function Tweet({
  isOwner,
  isFavourited,
  tweet,
  userOfTheTweet,
  favCount,
  tweetId,
}) {
  function handleDelete(tweetId) {
    axios.delete(`/api/tweets/${tweetId}`).then((res) => console.log(res));
  }

  function handleFav(tweetId) {
    axios.put(`/api/tweets/${tweetId}`).then((res) => console.log(res));
  }

  return (
    <div className="px-4 border-b-2 flex  h-auto">
      <div className="h-10 w-10 bg-cyan-600 rounded-full mt-5"></div>
      <div className="flex-grow ml-2">
        <h3 className="font-bold mt-2">{userOfTheTweet}</h3>
        <p className="overflow-y  max-w-2xl break-words">{tweet}</p>
        <div className="float-right flex items-center">
          <span className=" pr-5  text-sm">{favCount}</span>
          {isFavourited ? (
            <button
              onClick={() => handleFav(tweetId)}
              className="p-1 my-1 rounded-full hover:bg-white"
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

          {isOwner && (
            <button
              onClick={() => handleDelete(tweetId)}
              className="p-1 my-1 ml-10 rounded-full hover:bg-red-700"
            >
              <FiTrash size="20px" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
