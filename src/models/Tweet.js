import mongoose from "mongoose";

const { Schema } = mongoose;

const tweetSchema = new Schema(
  {
    creator: {
      creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      creatorName: {
        type: String,
        required: true,
      },
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

// export default mongoose.model("Tweet", tweetSchema);
module.exports = mongoose.models.Tweet || mongoose.model("Tweet", tweetSchema);
