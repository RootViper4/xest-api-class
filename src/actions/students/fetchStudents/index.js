const selectStudents = require("./queries/selectStudents");

const fetchStudents = async () => {
  const students = await selectStudents();

  return { students };
};

module.exports = fetchStudents;
