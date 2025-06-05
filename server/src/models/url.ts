import mongoose, { Document, Schema } from "mongoose";

export interface IUrl extends Document {
  originalUrl: string,
  hashId: string,
  createdAt: Date,
  expiresAt: Date,
  clickCount: number,
}

const urlSchema = new Schema<IUrl>({
  originalUrl: { type: String, required: true },
  hashId: { type: String, required: true, unique: true },
  createdAt: { type: Date, required: true },
  expiresAt: { type: Date },
  clickCount: { type: Number, default: 0 }
});

export const Url = mongoose.model<IUrl>("urls", urlSchema);
