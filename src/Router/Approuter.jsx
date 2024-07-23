import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Homepage from "../components/HomePage/Homepage";
import AgentregistrationPage from "../components/AgentregistrationPage/Agentregistrationpage";
import Referralspage from "../components/ReferralsPage/Referralspage";
import BlogsPage from "../components/BlogsPage/Blogspage";
import LoginPage from "../components/LoginPage/Loginpage";
import ProtectedRoute from "../shared/services/token/ProtectedRoute";
import AdminRouter from "../admin/Router/AdminRouter";
import DetailedBlogpage from "../components/DetailedblogPage/Detailedblogpage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/agentregistration" element={<AgentregistrationPage />} />
          <Route path="/referrals" element={<Referralspage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/detailedblog/:id" element={<DetailedBlogpage/>} />
        </Route>
        <Route
          path="/admindashboard/*"
          element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <AdminRouter />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
