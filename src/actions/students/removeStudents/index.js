const deleteStudents = require("./queries/deleteStudents");

const removeStudents = async ({ studentId }) => {
  await deleteStudents({ studentId });
};

module.exports = removeStudents;
