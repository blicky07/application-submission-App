// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './FirstSection.css'

const FirstSection = ({ formData = {}, onFormChange }) => {
  // Function to update form data and invoke onFormChange
  const updateFormData = (field, value) => {
    // Invoke onFormChange with updated form data
    onFormChange(field, value);
  };

  if (typeof formData !== 'object' || formData === null) {
    formData = {};
  }

  return (
    <div className="first-section">
      <form className="firstSection-form">
        <h1>Application for Admission</h1>
        <h2>Higher Degree by Research Students</h2>
        <h3>1. Course Applying for</h3>
        <label htmlFor="degree">Select Degree</label>
        <select
          id="degree"
          value={formData.degree}
          onChange={(e) => updateFormData('degree', e.target.value)}
        >
          <option value="PhD">PhD</option>
          <option value="Master by Research">Master by Research</option>
        </select>

        <h3>
          <strong>2. Previous Student Details</strong>
        </h3>
        <label htmlFor="previousStudy">Have you previously studied at Curtin University?</label>
        <select
          id="previousStudy"
          value={formData.previousStudy}
          onChange={(e) => updateFormData('previousStudy', e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label htmlFor="perthID">Perth Student ID</label>
        <input
          type="text"
          id="perthID"
          value={formData.perthID}
          onChange={(e) => updateFormData('perthID', e.target.value)}
        />

        <label htmlFor="cmID">If you are Curtin Malaysia student, please provide CM student ID</label>
        <input
          type="text"
          id="cmID"
          value={formData.cmID}
          onChange={(e) => updateFormData('cmID', e.target.value)}
        />

        <h3>
          <strong>3. Personal Details</strong>
        </h3>
        <div>Please provide your name, date of birth, and gender as shown on your passport or birth certificate</div>

        <label htmlFor="title">Title(Mr/Ms/Mrs)</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => updateFormData('title', e.target.value)}
        />

        <label htmlFor="givenName">Given Name</label>
        <input
          type="text"
          id="givenName"
          value={formData.givenName}
          onChange={(e) => updateFormData('givenName', e.target.value)}
        />

        <label htmlFor="otherNames">Any Other Names</label>
        <input
          type="text"
          id="otherNames"
          value={formData.otherNames}
          onChange={(e) => updateFormData('otherNames', e.target.value)}
        />

        <label htmlFor="familyName">Family Name(Surname)</label>
        <input
          type="text"
          id="familyName"
          value={formData.familyName}
          onChange={(e) => updateFormData('familyName', e.target.value)}
        />

        <h3>
          <strong>Name as shown in passport or birth certificate</strong>
        </h3>
        <div>Please enter your name as shown on your passport or birth certificate.</div>
        <div>This name will appear on your Curtin Award Certificate.</div>

        <label htmlFor="previousName">
          <strong>Previous Name</strong>
        </label>
        <input
          type="text"
          id="previousName"
          value={formData.previousName}
          onChange={(e) => updateFormData('previousName', e.target.value)}
        />

        <div>
          If you have changed your name since you last applied or were last enrolled at Curtin, or if the name on your supporting documents is not the same, please enter your previous name or names and provide formal evidence of each of the name changes
        </div>

        <label htmlFor="dob">Date of Birth(DD/MM/YY)</label>
        <input
          type="date"
          id="dob"
          value={formData.dob}
          onChange={(e) => updateFormData('dob', e.target.value)}
        />

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={formData.gender}
          onChange={(e) => updateFormData('gender', e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </form>
    </div>
  );
};

FirstSection.propTypes = {
  formData: PropTypes.object,
  onFormChange: PropTypes.func.isRequired,
};


export default FirstSection;
