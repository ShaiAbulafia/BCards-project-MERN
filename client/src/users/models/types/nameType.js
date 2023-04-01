import { shape, string } from "prop-types";

const nameType = shape({
  first: string,
  middle: string.isRequired,
  last: string.isRequired,
});

export default nameType;
