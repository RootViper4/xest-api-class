const { submitQuery } = require("~root/lib/database");

const deleteStudents = ({ studentId }) => submitQuery`
  DELETE FROM
    students
  WHERE
    student_id = ${studentId} `;
module.exports = deleteStudents;
