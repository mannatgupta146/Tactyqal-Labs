import mongoose, { Schema, Document } from "mongoose";

export interface IConsultationLead extends Document {
  parentName: string;
  studentName?: string;
  email: string;
  phone: string;
  studentAge?: number;
  goalInterest?: string;
  notes?: string;
  status: "NEW" | "CONTACTED" | "SCHEDULED" | "CLOSED";
  createdAt: Date;
}

const ConsultationLeadSchema = new Schema<IConsultationLead>(
  {
    parentName: { type: String, required: true, trim: true },
    studentName: { type: String, default: "" },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    studentAge: { type: Number },
    goalInterest: { type: String, default: "1:1 App Building & Mentoring" },
    notes: { type: String, default: "" },
    status: {
      type: String,
      enum: ["NEW", "CONTACTED", "SCHEDULED", "CLOSED"],
      default: "NEW",
    },
  },
  {
    timestamps: true,
  }
);

export const ConsultationLead =
  mongoose.models.ConsultationLead ||
  mongoose.model<IConsultationLead>("ConsultationLead", ConsultationLeadSchema);
