const { FIELDS } = require("../src/constants");
const { RULES } = require("../src/rules");

describe("Email validation", () => {
  test("Check Valid Case", () => {
    expect(RULES[FIELDS.EMAIL].validate("arvindan92@gmail.com")).toBe(true);
  });

  test("Check Invalid Case", () => {
    expect(RULES[FIELDS.EMAIL].validate("arvindan92...gmail.com")).toBe(false);
  });
});

describe("MOBILE_PHONE validation", () => {
  test("Check Valid Case", () => {
    expect(RULES[FIELDS.MOBILE_PHONE].validate("9282828281")).toBe(true);
  });

  test("Check Invalid Case", () => {
    expect(RULES[FIELDS.MOBILE_PHONE].validate("88192912939-1")).toBe(false);
  });
});

describe("PNR validation", () => {
  test("Check Valid Case", () => {
    expect(RULES[FIELDS.PNR].validate("ABC123")).toBe(true);
  });
  test("Check Valid Case", () => {
    expect(RULES[FIELDS.PNR].validate("ABCJSJ")).toBe(true);
  });

  test("Check Invalid Case", () => {
    expect(RULES[FIELDS.PNR].validate("ABCDEF12321")).toBe(false);
  });
});

describe("BOOKED_CABIN validation", () => {
  test("Check Valid Case", () => {
    expect(RULES[FIELDS.BOOKED_CABIN].validate("Economy")).toBe(true);
  });
  test("Check Valid Case", () => {
    expect(RULES[FIELDS.BOOKED_CABIN].validate("First")).toBe(true);
  });

  test("Check Invalid Case", () => {
    expect(RULES[FIELDS.BOOKED_CABIN].validate("Test")).toBe(false);
  });
});

describe("TICKETING DATE validation", () => {
  test("Check Valid Case", () => {
    expect(
      RULES[FIELDS.TICKETING_DATE].validate("2019-05-12", {
        [FIELDS.TRAVEL_DATE]: "2019-06-12"
      })
    ).toBe(true);
  });
  test("Check Valid Case", () => {
    expect(
      RULES[FIELDS.TICKETING_DATE].validate("2019-06-15", {
        [FIELDS.TRAVEL_DATE]: "2019-06-16"
      })
    ).toBe(true);
  });

  test("Check Invalid Case", () => {
    expect(
      RULES[FIELDS.TICKETING_DATE].validate("2019-07-12", {
        [FIELDS.TRAVEL_DATE]: "2019-06-12"
      })
    ).toBe(false);
  });
});
