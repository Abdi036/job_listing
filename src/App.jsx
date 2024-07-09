import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import AddJobsPage from "./pages/AddJobsPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/job/:id" element={<JobPage />} />
      <Route path="/add-jobs" element={<AddJobsPage />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
