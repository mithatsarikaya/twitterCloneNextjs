import mongoose from "mongoose";

const { Schema } = mongoose;

const tweetSchema = new Schema(
  {
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    tweet: {
      type: String,
      required: true,
    },
    favsOfTheTweet: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Tweet", tweetSchema);
