import Header from "./Components/Header";
import HomeCard from "./Components/HomeCard";
import JobLists from "./Components/JobLists";
import Navbar from "./Components/Navbar";
import ViewAllJobs from "./Components/ViewAllJobs";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HomeCard />
      <JobLists />
      <ViewAllJobs />
    </div>
  );
}
