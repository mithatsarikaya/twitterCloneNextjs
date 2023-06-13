import Tweet from "../../../models/Tweet";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  await connect();

  let tweets = await Tweet.find().sort({ createdAt: -1 });

  return new NextResponse(JSON.stringify(tweets), {
    status: 201,
  });
};

export const POST = async (request) => {
  const { tweet, creator } = await request.json();

  await connect();

  const newTweet = new Tweet({
    creator,
    tweet,
  });

  try {
    await newTweet.save();
    return new NextResponse("Tweet has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request) => {
  const { params } = request;

  await connect();

  // const newTweet = new Tweet({
  //   creator,
  //   tweet,
  // });

  // try {
  //   await newTweet.save();
  //   return new NextResponse("Tweet has been created", {
  //     status: 201,
  //   });
  // } catch (err) {
  //   return new NextResponse(err.message, {
  //     status: 500,
  //   });
  // }
};
