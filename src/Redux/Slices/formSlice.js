import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "",
    description: "",
    image: "",
    price: "",
    benefits: [""],
    additionalBenefits: [""],
    categories: "",
  },
];

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearFormData: (state) => {
      return {
        name: "",
        description: "",
        image: "",
        price: "",
        benefits: [""],
        additionalBenefits: [""],
        categories: "",
      };
    },
  },
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;
