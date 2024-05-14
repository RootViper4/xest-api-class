const handleAPIError = require("~root/utils/handleAPIError");
const fetchStudents = require("~root/actions/students/fetchStudents");

const getStudents = async (req, res) => {
  try {
    const { students } = await fetchStudents();

    res.status(200).send({ students });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getStudents;
