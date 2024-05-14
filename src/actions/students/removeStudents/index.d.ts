declare module "~root/actions/students/removeStudents" {
  export type Students = { studentId: number };

  export type RemoveStudentsArguments = Students;

  const removeStudents: (args: RemoveStudentsArguments) => Promise<>;

  export = removeStudents;
}
