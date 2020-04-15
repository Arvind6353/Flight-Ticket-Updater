const { FIELDS, PATTERNS, BOOKED_CABIN } = require("./constants");

const RULES = {
  [FIELDS.EMAIL]: {
    validate: val => PATTERNS[FIELDS.EMAIL].test(val)
  },
  [FIELDS.MOBILE_PHONE]: {
    validate: val => PATTERNS[FIELDS.MOBILE_PHONE].test(val)
  },
  [FIELDS.PNR]: {
    validate: val => PATTERNS[FIELDS.PNR].test(val)
  },
  [FIELDS.BOOKED_CABIN]: {
    validate: val => BOOKED_CABIN.includes(val)
  },
  [FIELDS.TICKETING_DATE]: {
    validate: (val, row) =>
      new Date(val).getTime() < new Date(row[FIELDS.TRAVEL_DATE]).getTime()
  }
};

const FORMATTER = {
  [FIELDS.DISCOUNT_CODE]: {
    format: val => {
      if (/[A-E]/g.test(val)) return val.replace(/[A-E]/g, "OFFER_20");
      if (/[F-K]/g.test(val)) return val.replace(/[F-K]/g, "OFFER_30");
      if (/[L-R]/g.test(val)) return val.replace(/[L-R]/g, "OFFER_25");
      return "";
    }
  }
};

module.exports = {
  RULES,
  FORMATTER
};
