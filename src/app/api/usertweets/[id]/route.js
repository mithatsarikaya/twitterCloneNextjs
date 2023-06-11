import Tweet from "../../../../models/Tweet";
import connect from "../../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const userId = params.id;

  try {
    await connect();

    let userstweet = await Tweet.find({
      "creator.creatorId": userId,
    }).sort({ createdAt: -1 });

    return new NextResponse(JSON.stringify(userstweet), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
