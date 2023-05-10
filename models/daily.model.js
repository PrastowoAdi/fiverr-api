import mongoose from "mongoose";
const { Schema } = mongoose;

const DailySchema = new Schema(
  {
    activity: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
      default: "WFH",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Daily", DailySchema);
