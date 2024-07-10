/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Jobs({ isHome }) {
  const [showDesc, setShowDesc] = useState({});
  const [Jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const URL = isHome
          ? "http://localhost:9000/jobs?_limit=3"
          : "http://localhost:9000/jobs";
        const res = await fetch(URL);
        const data = await res.json();
        data.sort((a, b) => b - a);
        setJobs(data);
      } catch (error) {
        console.log("error while fetching data", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchJobs();
  }, [isHome]);

  function toggleDescription(id) {
    setShowDesc((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <h1 className="text-6xl p-20 text-center">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Jobs.map((job) => (
            <div className="bg-white rounded-xl shadow-md" key={job.id}>
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">{job.type}</div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                </div>
                <div className="mb-5">
                  {!showDesc[job.id]
                    ? job.description.substring(0, 70) + "..."
                    : job.description}
                </div>
                <button
                  className="text-indigo-500 underline"
                  onClick={() => toggleDescription(job.id)}
                >
                  {showDesc[job.id] ? "Less" : "More"}
                </button>
                <h3 className="text-indigo-500 mb-2">{job.salary}/ Year</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3 lg:mb-0">
                    <FaMapMarker className="inline text-lg" />
                    {job.location}
                  </div>
                  <Link
                    to={`/job/${job.id}`}
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
