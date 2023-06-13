import Tweet from "../../../../models/Tweet";
import connect from "../../../../utils/db";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Tweet.findByIdAndDelete(id);

    return new NextResponse("Tweet has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  let userId = request.headers.get("token");
  const { fav } = await request.json();
  const { id } = params;

  try {
    await connect();

    let tweet = await Tweet.findById(id);

    //if fav true then un fav. else fav the tweet
    if (fav) {
      tweet.favsOfTheTweet = tweet.favsOfTheTweet.filter((u) => {
        return u != userId;
      });
      await tweet.save();

      return new NextResponse("Tweet has been unfaved lol", { status: 200 });
    } else if (!fav) {
      tweet.favsOfTheTweet = [...tweet.favsOfTheTweet, userId];
      await tweet.save();
      return new NextResponse("Tweet has been faved lol", { status: 200 });
    }
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    let tweet = await Tweet.findById(id);
    // console.log(tweet);

    return new NextResponse("Tweet has been faved lol", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    let tweet = await Tweet.findById(id);
    // console.log(tweet);

    return new NextResponse("Tweet has been faved lol", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
