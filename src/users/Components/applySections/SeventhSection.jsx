// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './SeventhSection.css'

const SeventhSection = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Make sure you have attached your Curriculum Vitae (using the required template available online at REPLACE_WITH_ACTUAL_LINK, complete with names of two academic referees.', checked: false },
    { id: 2, text: 'Make sure you have contacted the Enrolling Area and/or a potential supervisor to discuss your planned program prior to submitting this application.', checked: false },
    { id: 3, text: 'Enclose original or certified true copies of all previous qualifications, including award certificates and academic transcripts with a description of the grading system used (not required for qualification undertaken at Curtin).', checked: false },
    { id: 4, text: 'If you are Malaysian and studying at Curtin Malaysia, please enclose a copy of your National Registration Identity Card (IC).', checked: false },
    { id: 5, text: 'If your previous studies do not meet Curtin’s Standard English requirements, enclose copies of your English language qualifications or details of other English language proficiency.', checked: false },
    { id: 6, text: 'If your academic transcripts are in a language other than English, please enclose their English translations.', checked: false },
    { id: 7, text: 'Enclose a copy of evidence for a change of name.', checked: false },
    { id: 8, text: 'Read and sign the Applicant Declaration.', checked: false },
  ]);

  const [signatureImage, setSignatureImage] = useState(null);
  const [date, setDate] = useState('');

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleFileChange = (type, event) => {
    if (type === 'signatureImage') {
      const file = event.target.files[0];
      if (file.type.startsWith('image/')) {
        setSignatureImage(file);
      } else {
        alert('Please select an image file (.png, .jpg, .jpeg)');
      }
    }
    // Add logic for other file types if needed
    // console.log(signatureImage);
  };

  const handleUpload = async () => {
    try {
      if (!signatureImage) {
        alert('Please upload an image of your signature.');
        return;
      }
  
      const formData = new FormData();
      formData.append('signatureImage', signatureImage);
      const response = await fetch('http://localhost:5000/image', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
  
      const data = await response.json();
      console.log('Signature image uploaded successfully:', data);
      // Optionally, display success message to the user
    } catch (error) {
      console.error('Error uploading Image:', error);
      // Optionally, display error message to the user
    }
  };
  
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="seventh-section-container">
      <h2><strong>Application Declaration</strong></h2>
      <p>Please read the following Applicant Declaration and sign below to indicate you agree.</p>

      <h2><strong>Admission Application</strong></h2>
      <ol>
        <li> I declare that I have read the instructions on this application and that the information I have provided is accurate and complete.</li>
        <li> I acknowledge that if I do not provide the requested information, Curtin University may not be able access my application for admission.</li>
        <li> I authorise Curtin University to obtain further academic information or official student records from any educational institution or recognised educational qualification assessment body as necessary.</li>
        <li> I authorise Curtin University to verify my employment history for the purpose of making an informed decision about my application where my work experience is relevant.</li>
        <li> I understand that Curtin University is not responsible if any educational body or institution does not supply my academic or work history records.</li>
        <li> I acknowledge that Curtin University reserves the right to vary or reverse any decision regarding admission or academic progress made on the basis of incorrect, incomplete or fraudulent information.</li>
        <li> International students: If I do not meet all University’s entry requirements, I authorise the University to provide my full application to Curtin approved pathway providers for consideration for a preparatory program (Foundation/ Diploma). I understand that successful completion of this program will help qualify me for admission into specified of Curtin University.</li>
      </ol>

      <h2><strong>Privacy</strong></h2>
      <ol>
        <li> I agree that Curtin University may collect and disclose personal information about me for the purposes of assessing my application, creating a record on its student database, undertaking statistical analysis, providing data to Government Departments as required by law, for verification of study loads, for remission of debt and to further inform me about relevant courses and events.</li>
        <li> International students: I accept that information supplied in this application may also be made available to a Curtin University overseas representative to provide assistance with my application.</li>
        <li> International students: I accept that information supplied in this application may be made available to the University’s preferred Overseas Student Health Cover provider to assist with my health insurance.</li>
        <li> I acknowledge that I have the right to access and amend personal information which Curtin University holds about me, subject to exceptions in relevant privacy legislation. To access personal information contact the Privacy Compliance Officer at privacy@curtin.edu.au. A charge may apply for providing access.</li>
        <li> I understand that I can obtain further information concerning the Curtin University Privacy Policy at https://informationmanagement.curtin.edu.au/local/docs/PrivacyStatement.pdf.</li>
      </ol>

      <label htmlFor="signatureImage">Signature of applicant:</label>
      <input
        type="file"
        id="signatureImage"
        accept=".png, .jpg, .jpeg"
        onChange={(e) => handleFileChange('signatureImage', e)}
      />
      <button onClick={handleUpload}>Upload Signature Image</button>

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={handleDateChange}
      />
      <p>(DD/MM/YY)</p>

      <h2><strong>Application Checklist</strong></h2>
      {items.map((item) => (
        <div key={item.id} className="checkbox-item">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheckboxChange(item.id)}
            style={{ marginRight: '8px', verticalAlign: 'middle' }}
          />
          <span>{item.text}</span>
        </div>
      ))}
      <h2><strong>Lodging your Application</strong></h2>
      <p>
        Please complete this form and return to Curtin Malaysia Graduate School (CMGS) Office. CMGS Officer will acknowledge your application within 5 working days. Please note that standard admission processing time is within 3 weeks. Nevertheless, you may be requested to amend the application and/or submit additional documentation to complete the application. Consequently, the processing time may take longer to include a response period to re-submit the documentations.
        IMPORTANT: Original copies of documentations may be requested for verifications. These copies must also be presented during the enrolment.
        Please submit your application to the Curtin University Malaysia Graduate School:
        Graduate School Curtin University, Malaysia CDT250, 98009, Miri Sarawak, Malaysia
        All may submit applications electronically to: GradSchool@curtin.edu.my
      </p>
    </div>
  );
};

export default SeventhSection;
