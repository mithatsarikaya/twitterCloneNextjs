import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../models/User";
import connect from "../../../../utils/db";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //Check if the user exists.
        await connect();

        try {
          const user = await User.findOne({
            username: credentials.username,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              console.log("user: ", typeof user);

              // let newUser = {
              //   username: user.username,
              //   id: user._id.toString(),
              // };

              // console.log(newUser);

              let data = {
                userId: user._id.toString(),
                name: user.username,
                email: `${user._id.toString()}`,
              };
              return data;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: "/login",
  },
});

export { handler as GET, handler as POST };
