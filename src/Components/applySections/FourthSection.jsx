// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FourthSection.css';

const FourthSection = ({ formData = {}, onFormChange }) => {
  // Declare state variables
  const [institutionDetails, setInstitutionDetails] = useState([
    { institutionName: '', qualification: '', gpa: '', duration: '', firstYear: '', lastYear: '' },
    { institutionName: '', qualification: '', gpa: '', duration: '', firstYear: '', lastYear: '' },
    { institutionName: '', qualification: '', gpa: '', duration: '', firstYear: '', lastYear: '' },
    { institutionName: '', qualification: '', gpa: '', duration: '', firstYear: '', lastYear: '' },
  ]);

  // Function to update form data and invoke onFormChange
  const updateFormData = (field, value, index) => {
    const newInstitutionDetails = [...institutionDetails];
    newInstitutionDetails[index][field] = value;
    setInstitutionDetails(newInstitutionDetails);

    onFormChange('institutionDetails', newInstitutionDetails);
  };

  // Function to handle changes in the select fields
  const handleSelectChange = (field, value) => {
    onFormChange(field, value);
  };

  return (
    <div className="fourth-section">
      <h2>Previous and Current Study Details</h2>
      <form>
        <table>
          <thead>
            <tr>
              <th>Institution Name</th>
              <th>Full Name of Qualification</th>
              <th>GPA/CGPA</th>
              <th>Duration of Study</th>
              <th>First Year</th>
              <th>Last Year</th>
            </tr>
          </thead>
          <tbody>
            {formData.institutionDetails.map((detail, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name={`institutionName${index}`}
                    value={detail.institutionName}
                    onChange={(e) => updateFormData('institutionName', e.target.value, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name={`qualification${index}`}
                    value={detail.qualification}
                    onChange={(e) => updateFormData('qualification', e.target.value, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name={`gpa${index}`}
                    value={detail.gpa}
                    onChange={(e) => updateFormData('gpa', e.target.value, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name={`duration${index}`}
                    value={detail.duration}
                    onChange={(e) => updateFormData('duration', e.target.value, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name={`firstYear${index}`}
                    value={detail.firstYear}
                    onChange={(e) => updateFormData('firstYear', e.target.value, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name={`lastYear${index}`}
                    value={detail.lastYear}
                    onChange={(e) => updateFormData('lastYear', e.target.value, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <label htmlFor="prevResearch">
          Have you been previously enrolled in a Higher Degree by Research (HDR) at the same level
        </label>
        <select
          id="prevResearch"
          value={formData.prevResearch}
          onChange={(e) => handleSelectChange('prevResearch', e.target.value)}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="institution">At which Institution?</label>
        <input
          type="text"
          value={formData.institution}
          onChange={(e) => handleSelectChange('institution', e.target.value)}
        />

        <label htmlFor="withdrawalDate">
          If not completed, what was the date of withdrawal from your previous HDR enrolment?
        </label>
        <input
          type="text"
          value={formData.withdrawalDate}
          onChange={(e) => handleSelectChange('withdrawalDate', e.target.value)}
        />

        <h2>
          <strong>Course Details</strong>
        </h2>
        <label htmlFor="areaofStudy">Major area of study(e.g. Chemical Engineering)</label>
        <input
          type="text"
          value={formData.areaofStudy}
          onChange={(e) => handleSelectChange('areaofStudy', e.target.value)}
        />

        <label htmlFor="studyType">
          How do you intend to study?(Note: International students studying in Malaysia can only
          study full-time)
        </label>
        <select
          id="studyType"
          value={formData.studyType}
          onChange={(e) => handleSelectChange('studyType', e.target.value)}
        >
          <option value="fulltime">Full-time</option>
          <option value="partime">Part-time</option>
        </select>

        When do you wish to start your study?
        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          value={formData.year}
          onChange={(e) => handleSelectChange('year', e.target.value)}
        />
        <label htmlFor="studyPeriod">Study Period</label>
        <input
          type="text"
          id="studyPeriod"
          value={formData.studyPeriod}
          onChange={(e) => handleSelectChange('studyPeriod', e.target.value)}
        />
      </form>
    </div>
  );
};

FourthSection.propTypes = {
  formData: PropTypes.shape({
    prevResearch: PropTypes.string,
    institution: PropTypes.string,
    withdrawalDate: PropTypes.string,
    areaofStudy: PropTypes.string,
    studyType: PropTypes.string,
    year: PropTypes.string,
    studyPeriod: PropTypes.string,
    institutionDetails: PropTypes.arrayOf(
      PropTypes.shape({
        institutionName: PropTypes.string,
        qualification: PropTypes.string,
        gpa: PropTypes.string,
        duration: PropTypes.string,
        firstYear: PropTypes.string,
        lastYear: PropTypes.string,
      })
    ),
  }),
  onFormChange: PropTypes.func.isRequired,
};

export default FourthSection;
