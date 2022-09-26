import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Navigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "./routes/dashboard/dashboard.route";
import MainContent from "./components/maincontent/maincontent.component";
import Scripts from "./routes/scripts/scripts.route";
import Reports from "./routes/reports/reports.route";
import Admins from "./routes/admins/admins.route";
import FormScript from "./routes/scripts/form.component";
import FormAdmin from "./routes/admins/form.component";

AOS.init();

const App = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/admin/" element={<Navigate to="/admin/dashboard" />} />;
      <Route
        path="/admin/admins"
        element={
          <MainContent>
            <Admins />
          </MainContent>
        }
      />
      <Route
        path="/admin/reports"
        element={
          <MainContent>
            <Reports />
          </MainContent>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <MainContent>
            <Dashboard />
          </MainContent>
        }
      />
      <Route
        path="/admin/scripts"
        element={
          <MainContent>
            <Scripts />
          </MainContent>
        }
      />
      <Route
        path="/admin/scripts/editscript/*"
        element={
          <MainContent>
            <FormScript title="Edit" />
          </MainContent>
        }
      />
      <Route
        path="/admin/scripts/addscript/*"
        element={
          <MainContent>
            <FormScript title="Add" />
          </MainContent>
        }
      />
      <Route
        path="/admin/admins/editadmin/*"
        element={
          <MainContent>
            <FormAdmin role="Edit" />
          </MainContent>
        }
      />
      <Route
        path="/admin/admins/addadmin/*"
        element={
          <MainContent>
            <FormAdmin role="Add" />
          </MainContent>
        }
      />
      <Route path="/admin/*" element={<p>Error 404! Page Not Found</p>} />
    </Routes>
  );
};

export default App;
