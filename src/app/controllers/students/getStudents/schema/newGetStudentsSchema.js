const yup = require("yup");
const selectStudentsById = require("./queries/selectStudentsById");

const newGetStudentsSchema = yup.object().shape({
  studentId: yup
    .number()
    .integer()
    .required()
    .label("studentId")
    .typeError("The studentId field must be a number")
    .test(
      "doesExist",
      "The studentId field must be a valid studentId",
      async function test(studentId) {
        if (!studentId) {
          return false;
        }

        const studentIdCount = await selectStudentsById({
          studentId
        });
        if (studentIdCount === 0) {
          return false;
        }
        return true;
      }
    )
});

module.exports = newGetStudentsSchema;
