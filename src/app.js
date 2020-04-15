const { readCSVFiletoJSON, writeJSONtoCSVFile } = require("./file-util");
const {
  FIELDS,
  ITEMS_TO_VALIDATE,
  ERRORS,
  INPUT_FILENAME,
  VALID_FILENAME,
  INVALID_FILENAME
} = require("./constants");
const { RULES, FORMATTER } = require("./rules");

function validateInput(row) {
  let clonedRow = { ...row };
  let errorFields = ITEMS_TO_VALIDATE.map(item =>
    !RULES[item].validate(clonedRow[item], row) ? item : ""
  ).filter(Boolean);

  if (errorFields.length > 0) {
    clonedRow.isInvalid = true;
    clonedRow.errorFields = errorFields;
  }
  return clonedRow;
}

function formatData(row) {
  let { errorFields, ...data } = row;

  if (data.isInvalid) {
    return {
      ...data,
      [FIELDS.ERROR]: errorFields
        .map((error, idx) => `${idx + 1}.${ERRORS[error]}`)
        .join(" :: ")
    };
  }

  return {
    ...data,
    [FIELDS.DISCOUNT_CODE]: FORMATTER[FIELDS.DISCOUNT_CODE].format(
      data[FIELDS.FARE_CLASS]
    )
  };
}

function processFile(inputArr) {
  return inputArr.map(validateInput).map(formatData);
}

async function process(inputFileName, validFileName, invalidFileName) {
  try {
    // Step 1 - Read File
    let inpData = await readCSVFiletoJSON(inputFileName);

    // Step 2 - Process File
    let processedData = processFile(inpData);

    // Step 3 - Get Valid and Invalid Rows from Step 2

    console.log("No of Rows Processed ", processedData.length);

    let validRows = processedData
      .filter(data => !data.isInvalid)
      .map(({ isInvalid, ...row }) => row);
    let inValidRows = processedData
      .filter(data => data.isInvalid)
      .map(({ isInvalid, Discount_code, ...row }) => row);

    console.log("No of Valid Rows ", validRows.length);
    console.log("No of Invalid Entries ", inValidRows.length);

    await writeJSONtoCSVFile(validFileName, validRows);
    await writeJSONtoCSVFile(invalidFileName, inValidRows);
  } catch (error) {
    console.error("Error - " + error);
  }
}

process(INPUT_FILENAME, VALID_FILENAME, INVALID_FILENAME);
