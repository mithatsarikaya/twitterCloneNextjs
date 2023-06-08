import Tweet from "../../../models/Tweet";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  console.log(await request.json());

  return new NextResponse("Tweet has been created", {
    status: 201,
  });

  //   const { username, password } = await request.json();

  //   console.log(username, password);

  //   await connect();

  //   const hashedPassword = await bcrypt.hash(password, 5);

  //   const newUser = new User({
  //     username,
  //     password: hashedPassword,
  //   });

  //   try {
  //     await newUser.save();
  //     return new NextResponse("User has been created", {
  //       status: 201,
  //     });
  //   } catch (err) {
  //     return new NextResponse(err.message, {
  //       status: 500,
  //     });
  //   }
};
