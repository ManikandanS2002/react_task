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
    setFormInput: (state, action) => {
      state.push({
        id: state.length,
        ...action.payload,
      });
    },
    clearFormData: (state) => {
      state.name = "";
      state.description = "";
      state.image = "";
      state.price = "";
      state.benefits.length = 0;
      state.additionalBenefits.length = 0; 
      state.categories = "";
    },
  },
});

export const { setFormInput, clearFormData, } = formSlice.actions;
export default formSlice.reducer;
