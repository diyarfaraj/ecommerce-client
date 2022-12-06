import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required").trim(),
  address1: Yup.string().required("Address is required").trim(),
  address2: Yup.string().trim(),
  city: Yup.string().required("City is required").trim(),
  state: Yup.string().required("State is required").trim(),
  zip: Yup.string().required("Zip code is required").trim(),
  country: Yup.string().required("Country is required").trim(),
});
