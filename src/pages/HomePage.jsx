import Header from "../Components/Header";
import HomeCard from "../Components/HomeCard";
import JobLists from "../Components/JobLists";
import ViewAllJobs from "../Components/ViewAllJobs";

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeCard />
      <JobLists />
      <ViewAllJobs />
    </>
  );
}
