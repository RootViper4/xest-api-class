declare module "~root/actions/students/fetchStudents" {
  export type Students = {
    studentFirstName: string;
    studentLastName: string;
    studentEmail: string;
    studentMajor: string;
    createdAt: any;
  };

  export type FetchStudentsResult = {
    students: Students[];
  };

  export type FetchStudentsArguments = { studentId: number };

  const fetchStudents: (
    args: FetchStudentsArguments
  ) => Promise<FetchStudentsResult>;

  export = fetchStudents;
}
