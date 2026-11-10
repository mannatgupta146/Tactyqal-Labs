import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  isConsultationModalOpen: boolean;
  consultationInitialInterest: string;
  selectedAssessmentTool: string | null;
  toast: {
    message: string;
    type: "success" | "error" | "info";
  } | null;
  mobileNavOpen: boolean;
}

const initialState: UiState = {
  isConsultationModalOpen: false,
  consultationInitialInterest: "1:1 App Building & Mentoring",
  selectedAssessmentTool: null,
  toast: null,
  mobileNavOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openConsultationModal: (state, action: PayloadAction<string | undefined>) => {
      state.isConsultationModalOpen = true;
      if (action.payload) {
        state.consultationInitialInterest = action.payload;
      }
    },
    closeConsultationModal: (state) => {
      state.isConsultationModalOpen = false;
    },
    openAssessmentTool: (state, action: PayloadAction<string>) => {
      state.selectedAssessmentTool = action.payload;
    },
    closeAssessmentTool: (state) => {
      state.selectedAssessmentTool = null;
    },
    showToast: (
      state,
      action: PayloadAction<{ message: string; type: "success" | "error" | "info" }>
    ) => {
      state.toast = action.payload;
    },
    clearToast: (state) => {
      state.toast = null;
    },
    toggleMobileNav: (state) => {
      state.mobileNavOpen = !state.mobileNavOpen;
    },
    setMobileNavOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileNavOpen = action.payload;
    },
  },
});

export const {
  openConsultationModal,
  closeConsultationModal,
  openAssessmentTool,
  closeAssessmentTool,
  showToast,
  clearToast,
  toggleMobileNav,
  setMobileNavOpen,
} = uiSlice.actions;

export default uiSlice.reducer;
