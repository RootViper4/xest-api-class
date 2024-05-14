const { submitQuery, getFirst } = require("~root/lib/database");

const selectStudentsById = ({ studentId }) => submitQuery`
  SELECT
    COUNT(*) AS count
  FROM
    students
  WHERE
    student_id = ${studentId}
`;

module.exports = getFirst(selectStudentsById, "count");
