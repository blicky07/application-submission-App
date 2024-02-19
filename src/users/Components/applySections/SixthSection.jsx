// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SixthSection.css'

const SixthSection = ({ formData = {}, onFormChange }) => {
  
  const handleInputChange = (field, value) => {
    // Invoke onFormChange with updated form data
    onFormChange(field, value);
  };

  

  const handleFileUpload = () => {
    // Check if a file has been selected
    if (!formData.file) {
      alert('Please select a file to upload');
      return;
    }
    // Check file size
    if (formData.file.size > 16 * 1024 * 1024) { // 16MB limit
      alert('File size exceeds the maximum allowed limit of 16MB');
      return;
    }
    // Check file type
    if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.file.type)) {
      alert('File must be in PDF or Word format');
      return;
    }
    // Create a new FormData object
    const formData = new FormData();
    formData.append('cvFile', formData.file);
    // Create a progress callback function
    const handleProgress = (event) => {
      const progress = Math.round((event.loaded / event.total) * 100);
      console.log(`Upload Progress: ${progress}%`);
      // Update your progress indicator here
    };
    // Send the file to the server using the fetch API
    fetch('http://localhost:5000/files', {
      method: 'POST',
      body: formData,
      onProgress: handleProgress, // Attach progress callback
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log('File uploaded successfully:', data);
        // Optionally, display success message to the user
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        // Optionally, display error message to the user
      });
  };
  

  return (
    <form className="sixthSection-form">
      <h2>
        <strong>The Research</strong>
      </h2>
      <p>
        This section is <strong>required to be jointly completed by the applicant and intended Principal Supervisor.</strong> The information provided
        will be used to assess whether a sound basis for an academic research project of international standard
        which contributes towards original knowledge has been proposed. The writing in <strong>this section will be considered as a
          collaborative work between the applicant and the Principal Supervisor.</strong>
        Standard citations are required to be used, and an accompanying reference list needs to be provided in each section
        where citations appear. Up-to-date references should be included.
        There is no need to provide a detailed research proposal. This will be developed in the first part of your program at Curtin. However, please work with your intended supervisor to provide the following:
      </p>
      <ul>
        <li>
          a. A statement on the NOVELTY and SIGNIFICANCE of the proposed research (500-1000 words)
          Show how you have systematically reviewed the literature to ensure that your proposed research project does not cover previous studies.
          What elements will be new (original) in your proposed research project?
          Describe how the anticipated outcomes of the proposed study will advance the discipline (the significance of your work)
        </li>
      </ul>
      <label htmlFor="wordLimitedTextarea">Statement on Novelty and Significance:</label>
      <textarea
        id="wordLimitedTextarea"
        value={formData.textarea1}
        onChange={(e) => handleInputChange('wordLimitedTextarea', e.target.value)}
        rows={20}
        cols={250}
        placeholder="Type your text here..."
      />
      

      <ul>
        <li>
          b. What is the research gap in the proposed research area? (500 – 1000 words)
          A problem or issue exists because there is insufficient knowledge which can be used to close that gap in knowledge to resolve the problem/issue.
          What previous work has been done in this area and what are their limitations such that the gap remains open? How do you define this research gap (what needs to be discovered)?
          Items (a) and (b) help establish the need for Curtin Malaysia resources to be allocated to your proposed study.
        </li>
      </ul>
      <label htmlFor="wordLimitedTextarea1">Research Gap:</label>
      <textarea
        id="wordLimitedTextarea1"
        value={formData.textarea2}
        onChange={(e) => handleInputChange('wordLimitedTextarea1', e.target.value)}
        rows={20}
        cols={250}
        placeholder="Type your text here..."
      />
     

      <ul>
        <li>
          c. References
        </li>
      </ul>
      <label htmlFor="wordLimitedTextarea2">References:</label>
      <textarea
        id="wordLimitedTextarea2"
        value={formData.textarea3}
        onChange={(e) => handleInputChange('wordLimitedTextarea2', e.target.value)}
        rows={20}
        cols={250}
        placeholder="Type your text here..."
      />

      <ul>
        <li>
          d. What is/are the research questions that remain to be resolved in order to close that research gap?
        </li>
      </ul>
      <label htmlFor="wordLimitedTextarea3">Research Questions:</label>
      <textarea
        id="wordLimitedTextarea3"
        value={formData.textarea4}
        onChange={(e) => handleInputChange('wordLimitedTextarea3', e.target.value)}
        rows={20}
        cols={250}
        placeholder="Type your text here..."
      />

      <p>
        Please list any additional training that will be required to be undertaken by the student for this project.
        Please note that it is the responsibility of the intending Supervisor to take on only those who have experience/backgrounds appropriate to the proposed project. Do not leave this section blank.
      </p>
      <label htmlFor="wordLimitedTextarea4">Additional Training:</label>
      <textarea
        id="wordLimitedTextarea4"
        value={formData.textarea5}
        onChange={(e) => handleInputChange('wordLimitedTextarea4', e.target.value)}
        rows={20}
        cols={250}
        placeholder="Type your text here..."
      />

      <h2>
        <strong>Curriculum Vitae</strong>
      </h2>
      <p>
        Please attach a copy of your Curriculum Vitae (CV) or resume which has been prepared using the required template
        available online at https://gradschool.curtin.edu.my/higher-degree-by-research/future-students/application-process/application/.
        The CV template allows you to indicate details of your past employment, publications, and referees.
      </p>
      <label htmlFor="cvFile">Upload CV:</label>
      <input
        type="file"
        id="cvFile"
        accept=".pdf, .doc, .docx"
        onChange={(e) => handleInputChange('cvFile', e.target.files[0])}
      />
      <button onClick={handleFileUpload}>Upload</button>
    </form>
  );
};

SixthSection.propTypes = {
  formData: PropTypes.shape({
    wordLimitedTextarea: PropTypes.string,
    wordLimitedTextarea1: PropTypes.string,
    wordLimitedTextarea2: PropTypes.string,
    wordLimitedTextarea3: PropTypes.string,
    wordLimitedTextarea4: PropTypes.string,
    cvFile: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)]), // Adjust based on the actual type of cvFile
  }).isRequired,
  onFormChange: PropTypes.func.isRequired,
};

export default SixthSection;
