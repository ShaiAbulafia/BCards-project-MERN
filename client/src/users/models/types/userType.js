import { shape, string, bool } from "prop-types";
import nameType from "./nameType";
import imageType from "./imageType";
import addressType from "./addressType";

const userType = shape({
  _id: string.isRequired,
  name: nameType.isRequired,
  phone: string.isRequired,
  email: string.isRequired,
  password: string,
  image: imageType.isRequired,
  address: addressType.isRequired,
  isBusiness: bool.isRequired,
  isAdmin: bool.isRequired,
  createdAt: string.isRequired,
});

export default userType;
