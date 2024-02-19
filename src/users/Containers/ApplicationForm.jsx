// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import FirstSection from '../../Components/applySections/FirstSection';
import SecondSection from '../../Components/applySections/SecondSection';
import ThirdSection from '../../Components/applySections/ThirdSection';
import FourthSection from '../../Components/applySections/FourthSection';
import FifthSection from '../../Components/applySections/FifthSection';
import SixthSection from '../../Components/applySections/SixthSection';
import SeventhSection from '../../Components/applySections/SeventhSection';
import './ApplicationForm.css';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        FirstSection: {},
        SecondSection: {},
        ThirdSection: {},
        FourthSection: {},
        FifthSection: {},
        SixthSection: {},
        SeventhSection: {},
    });

    const [showReview, setShowReview] = useState(false);

    const handleFormChange = (section, data) => {
        setFormData((prevData) => ({
          ...prevData,
          [section]: data,
        }));
    };

    const handleReview = () => {
        setShowReview(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await fetch('http://localhost:5000/applications', {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            })
            console.log('Submitting Form');
            alert("Your application has been submitted successfully!");
        } catch(err){
            console.log(err);
            alert("An error occurred while submitting your application. Please try again later.");
        }
    };

    return (
        <div className='application-form-container'>
            <FirstSection formData={formData.FirstSection} onFormChange={(data) => handleFormChange("FirstSection", data)} />
            <SecondSection formData={formData.SecondSection} onFormChange={(data) => handleFormChange("SecondSection", data)} />
            <ThirdSection formData={formData.ThirdSection} onFormChange={(data) => handleFormChange("ThirdSection", data)} />
            <FourthSection formData={formData.FourthSection} onFormChange={(data) => handleFormChange("FourthSection", data)} />
            <FifthSection formData={formData.FifthSection} onFormChange={(data) => handleFormChange("FifthSection", data)} />
            <SixthSection formData={formData.SixthSection} onFormChange={(data) => handleFormChange("SixthSection", data)} />
            <SeventhSection formData={formData.SeventhSection} onFormChange={(data) => handleFormChange("SeventhSection", data)} />

            <button onClick={handleReview}>Review</button>
            <button onClick={handleSubmit}>Submit</button>

            {showReview && (
                <div className="review-modal">
                    <h2>Review Your Information</h2>
                    {/* Display a summary of entered information */}
                    {/* You can format and display the information as needed */}
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                    <button onClick={() => setShowReview(false)}>Close</button>
                </div>
            )}
        </div>
    );

    
};

export default ApplicationForm;
