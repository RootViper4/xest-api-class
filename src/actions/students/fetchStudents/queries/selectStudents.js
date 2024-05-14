const { submitQuery, camelKeys } = require("~root/lib/database");

const selectStudents = () => submitQuery`
  SELECT
    student_first_name,
    student_last_name,
    student_email,
    student_major,
    created_at
  FROM
    students
`;

module.exports = camelKeys(selectStudents);
