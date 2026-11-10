import { Request, Response } from "express";
import { ConsultationLead } from "../models/ConsultationLead";
import { isMongoConnected, MemoryStore } from "../config/db";

// POST /api/consultation
export const createLead = async (req: Request, res: Response) => {
  try {
    const { parentName, studentName, email, phone, studentAge, goalInterest, notes } = req.body;

    if (!parentName || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: "Parent name, email, and phone number are required.",
      });
    }

    const leadData = {
      parentName,
      studentName: studentName || "",
      email,
      phone,
      studentAge: studentAge ? Number(studentAge) : undefined,
      goalInterest: goalInterest || "1:1 App Building & Mentoring",
      notes: notes || "",
      status: "NEW",
      createdAt: new Date(),
    };

    if (isMongoConnected) {
      const created = await ConsultationLead.create(leadData);
      return res.status(201).json({
        success: true,
        message: "Thank you! Your free consultation has been booked. Our team will contact you within 24 hours.",
        data: created,
      });
    }

    // MemoryStore fallback
    const id = `lead_${Date.now()}`;
    const saved = { _id: id, id, ...leadData };
    MemoryStore.leads.push(saved);

    return res.status(201).json({
      success: true,
      message: "Thank you! Your free consultation has been booked. Our team will contact you within 24 hours.",
      data: saved,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/consultation
export const getLeads = async (_req: Request, res: Response) => {
  try {
    if (isMongoConnected) {
      const leads = await ConsultationLead.find().sort({ createdAt: -1 });
      return res.json({ success: true, data: leads });
    }

    return res.json({ success: true, data: MemoryStore.leads });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
