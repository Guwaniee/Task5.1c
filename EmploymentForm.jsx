import React, { useState } from 'react';
import './EmploymentForm.css'; 

function EmploymentForm() {
  
  const [title, setTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skills, setSkills] = useState('');

  // State for Experience section
  const [experienceField, setExperienceField] = useState('');
  const [experienceYears, setExperienceYears] = useState('');

  return (
    <div className="container"> {EmploymentForm.css}
      <h2>Employment Application Form:</h2>
      <label>
        Title/Position:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Job Description:
        <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
      </label>
      <label>
        Skills:
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Please add skills that your job requires"
        />
      </label>

      <h3>Experience</h3>
      <label>
        Experienced in:
        <input
          type="text"
          value={experienceField}
          onChange={(e) => setExperienceField(e.target.value)}
        />
        for at least
        <input
          type="text"
          value={experienceYears}
          onChange={(e) => setExperienceYears(e.target.value)}
        />{' '}
        years
      </label>
    </div>
  );
}

export default EmploymentForm;
