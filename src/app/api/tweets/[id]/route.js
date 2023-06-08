import Tweet from "../../../../models/Tweet";
import connect from "../../../../utils/db";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  console.log("hello");
  const { id } = params;

  await connect();

  try {
    await connect();

    await Tweet.findByIdAndDelete(id);

    return new NextResponse("Tweet has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  console.log("hello from put");
  const { id } = params;

  try {
    await connect();

    let tweet = await Tweet.findById(id);
    console.log(tweet);
    return;

    return new NextResponse("Tweet has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
