import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";

export default function JobPage() {
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await fetch(`http://localhost:9000/jobs/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchJob();
  }, [id]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {job ? (
        <div className="bg-white rounded-xl shadow-md p-6 m-5">
          <Link
            to={`/`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Back
          </Link>
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-2xl font-bold">{job.title}</h3>
          </div>
          <div className="mb-5">{job.description}</div>
          <h3 className="text-indigo-500 mb-2">{job.salary}/ Year</h3>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3 lg:mb-0">
              <FaMapMarker className="inline" />
              {job.location}
            </div>
            <Link
              to={`/job/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      ) : (
        <div>Job not found.</div>
      )}
    </div>
  );
}
