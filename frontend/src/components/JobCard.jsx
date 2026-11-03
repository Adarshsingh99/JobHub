import SaveButton from "./SaveButton";

function JobCard({ title, company, city, salaryMin, salaryMax, isRemote, skills }) {
  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p>{company} - {city}</p>
      <p>
        Salary: ₹{salaryMin.toLocaleString("en-IN")} - ₹{salaryMax.toLocaleString("en-IN")}
      </p>
      <p>{isRemote ? "Remote" : "On-site"}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <button>Apply</button>
      <SaveButton />
    </div>
  );
}

export default JobCard;