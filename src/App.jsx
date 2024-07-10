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
import EditJobPage from "./pages/EditJobPage";
import NotFound from "./pages/NotFound";

// Add job
async function addJob(newJob) {
  const res = await fetch("http://localhost:9000/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return res.json();
}

// Delete Job
async function deleteJob(id) {
  const res = await fetch(`http://localhost:9000/jobs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

// Update Job
async function updateJob(job) {
  const res = await fetch(`http://localhost:9000/jobs/${job.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  return res.json();
}

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/job/:id" element={<JobPage deleteJob={deleteJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage onEditJob={updateJob} />}
        />
        <Route path="/add-jobs" element={<AddJobsPage onAddJob={addJob} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
