// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import PropTypes from 'prop-types';
import './FifthSection.css'


const FifthSection = ({ formData = {}, onFormChange }) => {
  // Function to update form data and invoke onFormChange
  const updateFormData = (field, value) => {
    // Update state variable
    // Invoke onFormChange with updated form data
    onFormChange(field, value);
  };

  return (
    <form className="fifthSection-form">
      <h2>Supervisor</h2>
      <p>
        You are required to identify academic supervisors in your specific area of interest who have agreed to take you on as their research student. In order to be able to do this, you will need to have made contact with the enrolling area (usually a Faculty) which would have provided you with information on potential supervisors and the projects which may be available.
      </p>
      <p>
        Please provide details of the member of the Academic Unit who has agreed to be your supervisor(s):
      </p>
      <label htmlFor="supervisorName">Name</label>
      <input
        type="text"
        id="supervisorName"
        value={formData.supervisorName}
        onChange={(e) => updateFormData('supervisorName', e.target.value)}
      />

      <label htmlFor="academicUnit">Academic Unit (e.g. Department of Accounting/Faculty of Business)</label>
      <input
        type="text"
        id="academicUnit"
        value={formData.academicUnit}
        onChange={(e) => updateFormData('academicUnit', e.target.value)}
      />

      <div>Supervisor&apos;s Declaration</div>
      <label htmlFor="declaration1">
        <input
          type="checkbox"
          id="declaration1"
          checked={formData.declaration1}
          onChange={(e) => updateFormData('declaration1', e.target.checked)}
        />
        We/I declare that I/We have been in communication with the applicant to complete the admission form and develop a research proposal, and am/are agreeable to be the thesis supervisor; and
      </label>

      <label htmlFor="declaration2">
        <input
          type="checkbox"
          id="declaration2"
          checked={formData.declaration2}
          onChange={(e) => updateFormData('declaration2', e.target.checked)}
        />
        We/I declare that I/We possess the core expertise to supervise the thesis project; and
      </label>

      <label htmlFor="declaration3">
        <input
          type="checkbox"
          id="declaration3"
          checked={formData.declaration3}
          onChange={(e) => updateFormData('declaration3', e.target.checked)}
        />
        We/I declare that I/We have checked and confirmed the availability of resources and facilities at Curtin University Malaysia or accessibility of such resources and facilities from other institutions to support the proposed research project.
      </label>

      <h2><strong>13. Research Topic or Area or Project Title and Field of Research Code</strong></h2>

      <label htmlFor="researchTopic">Research Topic</label>
      <input
        type="text"
        id="researchTopic"
        value={formData.researchTopic}
        onChange={(e) => updateFormData('researchTopic', e.target.value)}
      />

      <p>Please provide the field of research code that most accurately describes your research topic. You must use the 6-digit field code as this information will be used for government reporting. The Field of Research codes are available at the Australian Bureau of Statistics website via: ABS-For codes</p>

      <label htmlFor="researchField">Name of Field of Research</label>
      <input
        type="text"
        id="researchField"
        value={formData.researchField}
        onChange={(e) => updateFormData('researchField', e.target.value)}
      />

      <label htmlFor="digitCode">6 Digit Code</label>
      <input
        type="text"
        id="digitCode"
        value={formData.digitCode}
        onChange={(e) => updateFormData('digitCode', e.target.value)}
      />
    </form>
  );
};

FifthSection.propTypes = {
    formData: PropTypes.shape({
      supervisorName: PropTypes.string,
      academicUnit: PropTypes.string,
      declaration1: PropTypes.bool,
      declaration2: PropTypes.bool,
      declaration3: PropTypes.bool,
      researchTopic: PropTypes.string,
      researchField: PropTypes.string, // Add this line
      digitCode: PropTypes.string,
    }).isRequired,
    onFormChange: PropTypes.func.isRequired,
  };

export default FifthSection;