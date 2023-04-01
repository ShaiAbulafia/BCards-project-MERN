import { shape, string, number, arrayOf, oneOfType } from "prop-types";
import addressType from "./addressType";
import imageType from "./imageType";

const cardType = shape({
  _id: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string.isRequired,
  address: addressType.isRequired,
  image: imageType.isRequired,
  bizNumber: number.isRequired,
  phone: string.isRequired,
  email: string.isRequired,
  user_id: string.isRequired,
  createdAt: string.isRequired,
  likes: arrayOf(string).isRequired,
  web: oneOfType([string]).isRequired,
});

export default cardType;
