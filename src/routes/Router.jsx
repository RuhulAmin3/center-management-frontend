import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import AllStudents from "../pages/AdminRole/students/AllStudents";
import StudentDetails from "../pages/AdminRole/students/StudentDetails";
import AdmissionForm from "../pages/AdminRole/students/AdmissionForm";
import StudentFeesReport from "../pages/AdminRole/students/StudentFeesReport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/all-students",
        element: <AllStudents />,
      },
      {
        path: "/student-details/:id",
        element: <StudentDetails />,
      },
      {
        path: "/admission-form",
        element: <AdmissionForm />,
      },
      {
        path: "/fees-report",
        element: <StudentFeesReport />,
      },
    ],
  },
]);
