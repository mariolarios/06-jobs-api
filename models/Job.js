const mongoose = require("mongoose");
///////
// I named the variables based on the 'job' schema but I am testing how
//the schema would work for a social media post.
///////
const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title to your post"],
      maxLength: 50,
    },
    status: {
      type: String,
      required: [true, "Please provide a status"],
      maxLength: 100,
    },
    emotion: {
      type: String,
      enum: ["neutral", "happy", "excited", "upset"],
      default: "neutral",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
