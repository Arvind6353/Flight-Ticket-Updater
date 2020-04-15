const INPUT_FILENAME = "input.csv";
const VALID_FILENAME = "valid.csv";
const INVALID_FILENAME = "invalid.csv";

const FIELDS = {
  EMAIL: "Email",
  MOBILE_PHONE: "Mobile_phone",
  PNR: "PNR",
  BOOKED_CABIN: "Booked_cabin",
  TICKETING_DATE: "Ticketing_date",
  TRAVEL_DATE: "Travel_date",
  FARE_CLASS: "Fare_class",
  DISCOUNT_CODE: "Discount_code",
  ERROR: "Error"
};

const BOOKED_CABIN = ["Economy", "Premium Economy", "Business", "First"];

const ITEMS_TO_VALIDATE = [
  FIELDS.EMAIL,
  FIELDS.MOBILE_PHONE,
  FIELDS.PNR,
  FIELDS.BOOKED_CABIN,
  FIELDS.TICKETING_DATE
];

const ERRORS = {
  [FIELDS.EMAIL]: "EMAIL IS INVALID",
  [FIELDS.MOBILE_PHONE]: "MOBILE PHONE IS INVALID",
  [FIELDS.PNR]: "PNR IS INVALID",
  [FIELDS.BOOKED_CABIN]: "BOOKED_CABIN IS INVALID",
  [FIELDS.TICKETING_DATE]: "TICKETING DATE IS BEFORE TRAVEL DATE"
};

const PATTERNS = {
  [FIELDS.EMAIL]: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  [FIELDS.MOBILE_PHONE]: /^\d{10}$/,
  [FIELDS.PNR]: /^\w{6}$/
};

module.exports = {
  FIELDS,
  BOOKED_CABIN,
  ITEMS_TO_VALIDATE,
  ERRORS,
  PATTERNS,
  INPUT_FILENAME,
  VALID_FILENAME,
  INVALID_FILENAME
};
