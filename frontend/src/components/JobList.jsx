import JobCard from "./JobCard";
import jobs from "../../Data/jobs";
function JobList() {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company}
          city={job.city}
          salaryMin={job.salaryMin}
          salaryMax={job.salaryMax}
          isRemote={job.isRemote}
          skills={job.skills}
        />
      ))}
    </div>
  );
}

export default JobList;