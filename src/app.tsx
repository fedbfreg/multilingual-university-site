import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import HomePage from "@/pages/HomePage/HomePage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import DepartmentsPage from "@/pages/DepartmentsPage/DepartmentsPage";
import DepartmentDetailPage from "@/pages/DepartmentDetailPage/DepartmentDetailPage";
import FacultyPage from "@/pages/FacultyPage/FacultyPage";
import FacultyDetailPage from "@/pages/FacultyDetailPage/FacultyDetailPage";
import AdmissionsPage from "@/pages/AdmissionsPage/AdmissionsPage";
import CampusLifePage from "@/pages/CampusLifePage/CampusLifePage";
import NewsPage from "@/pages/NewsPage/NewsPage";
import NewsDetailPage from "@/pages/NewsDetailPage/NewsDetailPage";
import ContactPage from "@/pages/ContactPage/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="departments" element={<DepartmentsPage />} />
        <Route path="departments/:id" element={<DepartmentDetailPage />} />
        <Route path="faculty" element={<FacultyPage />} />
        <Route path="faculty/:id" element={<FacultyDetailPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="campus-life" element={<CampusLifePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:id" element={<NewsDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
