const handleAPIError = require("~root/utils/handleAPIError");
const removeStudents = require("~root/actions/students/removeStudents");
const newDeleteStudentsSchema = require("./schema/newDeleteStudentsSchema");

const deleteStudents = async (req, res) => {
  const { studentId } = req.params;

  try {
    await newDeleteStudentsSchema.validate(
      { studentId },
      { abortEarly: false }
    );

    await removeStudents({ studentId });

    res.status(204).send({ success: true });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteStudents;
