import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import { AnnouncementForm } from "@/widgets/form";
import routes from "@/routes";
import Profile from "./pages/profile";
import { DataProvider } from "./data/dataContext";
import NotFound from "./widgets/404Page/NotFound";

function App() {
  return (
    <DataProvider>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" replace />}
        />
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} path={path} element={element} />
        )}
        <Route path="/a/:id" element={<Profile />} />
        <Route path="/announcementForm" element={<AnnouncementForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
