"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConsultationModal, AssessmentToolModal } from "@/components/modals";
import Toast from "@/components/toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <ConsultationModal />
      <AssessmentToolModal />
      <Toast />
    </Provider>
  );
}
