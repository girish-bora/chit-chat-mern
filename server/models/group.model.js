import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    admin: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    messages: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Message",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Group = mongoose.model("Group", groupSchema);
export default Group;
