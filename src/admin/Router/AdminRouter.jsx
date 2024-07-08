import { Routes, Route, Navigate } from "react-router-dom";
import Adminmain from "../core/Adminmain";
import Dashboard from "../components/Dashboard/Dashboard";
import BlogsPage from "../components/BlogsaPage/Blogspage";
import Viewblogspage from "../components/ViewblogsPage/Viewblogspage";



const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Adminmain />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="viewblogs" element={<Viewblogspage/>} />
        <Route path="/" element={<Navigate to="/admindashboard/dashboard" />} />
      </Route>
    </Routes>
  );
}
export default AdminRouter;
