// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ThirdSection.css'

const ThirdSection = ({ formData = {}, onFormChange }) => {
  // Function to update form data and invoke onFormChange
  const updateFormData = (field, value) => {
    // Invoke onFormChange with updated form data
    onFormChange(field, value);
  };


  return (
    <form className="thirdSection-form">
      <h3>7. Sponsor name (if applicable)</h3>
      <div>If you expect your fees to be paid by a sponsor direct to the University, please enter the sponsor name. Please attach sponsorship letter if it is available</div>
      <label htmlFor="sponsorName">Sponsor Name</label>
      <input
        type="text"
        id="sponsorName"
        name="sponsorName"
        value={formData.sponsorName}
        onChange={(e) => updateFormData('sponsorName', e.target.value)}
      />

      <h3>8. Scholarship</h3>
      Are you going to be funded by the supervisor&apos;s research grant?
      <label>
      Yes
      <input
        type="checkbox"
        id="uniScholarship"
        name="uniScholarship"
        value={formData.uniScholarship}
        onChange={(e) => updateFormData('uniScholarship', e.target.value)}
      />
    </label>

      <label htmlFor="grantName">Name of the grant</label>
      <input
        type="text"
        id="grantName"
        name="grantName"
        value={formData.grantName}
        onChange={(e) => updateFormData('grantName', e.target.value)}
      />

      <label htmlFor="secondOption">No</label>
      <input
        type="checkbox"
        id="secondOption"
        name="secondOption"
        checked={formData.secondOption}
        onChange={(e) => updateFormData('secondOption', e.target.checked)}
      />

      <label htmlFor="postScholarship">If the answer is &quot;No&quot; in the previous question, do you wish to be considered for a Curtin Malaysia Postgraduate Research Scholarship (CMPRS)?</label>
      <select
        id="postScholarship"
        name="postScholarship"
        value={formData.postScholarship}
        onChange={(e) => updateFormData('postScholarship', e.target.value)}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="failScholarship">If you are unsuccessful in obtaining the CPRMS award, do you still wish to continue this application for admission?</label>
      <select
        id="failScholarship"
        name="failScholarship"
        value={formData.failScholarship}
        onChange={(e) => updateFormData('failScholarship', e.target.value)}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <h3>9. English Language Proficiency</h3>
      <div>All applicants must meet Curtin&apos;s English language requirement. Please indicate your eligibility by selecting one of the below options. Official evidence must be included as one of the supporting documents for this admission.</div>

      <label htmlFor="curtinGrad">Are you a Curtin University graduate or graduate from any recognized university in Australia?</label>
      <select
        id="curtinGrad"
        name="curtinGrad"
        value={formData.curtinGrad}
        onChange={(e) => updateFormData('curtinGrad', e.target.value)}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="euUniGrad">If &quot;No&quot; in the previous question, have you completed at least one semester full-time or equivalent of a postgraduate study at a recognized university in New Zealand, Republic of Ireland, or the United Kingdom?</label>
      <select
        id="euUniGrad"
        name="euUniGrad"
        value={formData.euUniGrad}
        onChange={(e) => updateFormData('euUniGrad', e.target.value)}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="usUniGrad">If &quot;No&quot; in the previous question, have you completed at least one semester full-time or equivalent of a postgraduate study at a recognized university in Canada, Singapore, South Africa, or the United States of America?</label>
      <select
        id="usUniGrad"
        name="usUniGrad"
        value={formData.usUniGrad}
        onChange={(e) => updateFormData('usUniGrad', e.target.value)}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="recognizedGrad">If &quot;No&quot; in the previous question, did you obtain an undergraduate or postgraduate degree from a recognized overseas university, assessed by Curtin University as comparable to the Australian bachelor or master degree in which Curtin University recognized English is the sole language of instruction?</label>
      <select
        id="recognizedGrad"
        name="recognizedGrad"
        value={formData.recognizedGrad}
        onChange={(e) => updateFormData('recognizedGrad', e.target.value)}
      >
        <option value="yes">Yes Please check and provide a screenshot from here https://www.whed.net/home.php</option>
        <option value="no">No</option>
      </select>

      <div>If &quot;No&quot; in the previous question, please indicate one of the English Proficiency Tests below and provide official evidence</div>
      <label htmlFor="ieltsTest">IELTS (Please indicate the scores (Listening, Reading, Writing, Speaking, and Overall Scores))</label>
      <input
        type="checkbox"
        id="ieltsTest"
        name="ieltsTest"
        checked={formData.ieltsTest}
        onChange={(e) => updateFormData('ieltsTest', e.target.checked)}
      />
      <label htmlFor="ieltsScore">IELTS Score(if applicable)</label>
      <input
        type="text"
        id="ieltsScore"
        name="ieltsScore"
        value={formData.ieltsScore}
        onChange={(e) => updateFormData('ieltsScore', e.target.value)}
      />

      <label htmlFor="toeflTest">TOEFL (Please indicate the scores (Listening, Reading, Writing, Speaking, and Overall Scores))</label>
      <input
        type="checkbox"
        id="toeflTest"
        name="toeflTest"
        checked={formData.toeflTest}
        onChange={(e) => updateFormData('toeflTest', e.target.checked)}
      />
      <label htmlFor="toeflScore">TOEFL Score (if applicable)</label>
      <input
        type="text"
        id="toeflScore"
        name="toeflScore"
        value={formData.toeflScore}
        onChange={(e) => updateFormData('toeflScore', e.target.value)}
      />

      <label htmlFor="otherTest">Other Test (Please indicate the scores (Listening, Reading, Writing, Speaking, and Overall Scores))</label>
      <input
        type="checkbox"
        id="otherTest"
        name="otherTest"
        checked={formData.otherTest}
        onChange={(e) => updateFormData('otherTest', e.target.checked)}
      />
      <label htmlFor="otherScore">Other Test Scores (if applicable)</label>
      <input
        type="text"
        id="otherScore"
        name="otherScore"
        value={formData.otherScore}
        onChange={(e) => updateFormData('otherScore', e.target.value)}
      />
    </form>
  );
};

ThirdSection.propTypes = {
  formData: PropTypes.object.isRequired, // You can update the shape as needed
  onFormChange: PropTypes.func.isRequired,
};

export default ThirdSection;
