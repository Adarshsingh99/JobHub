import JobCard from "./components/JobCard";
import jobs from "../Data/jobs";
import JobList from "./components/JobList";
function App() {
  return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <JobList/>   
        </div>

  );
}

export default App;