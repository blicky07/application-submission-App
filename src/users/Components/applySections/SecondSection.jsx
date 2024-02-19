// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SecondSection.css'

const SecondSection = ({ formData = {}, onFormChange }) => {
  
  // Function to update form data and invoke onFormChange
  const updateFormData = (field, value) => {
    // Invoke onFormChange with updated form data
    onFormChange(field, value);
  };

  return (
    <form className="secondSection-form">
      <h3>4. Email and Phone Details</h3>
      <div>Please provide your current contact email and phone details (you must provide at least one phone number). Your email address will be used to contact you, so ensure you provide a valid address.</div>
      <label htmlFor="email">Email Address</label>
      <input
        type="text"
        id="email"
        value={formData.email}
        onChange={(e) => updateFormData('email', e.target.value)}
      />

      <label htmlFor="homePhone">Home Phone</label>
      <input
        type="text"
        id="homePhone"
        value={formData.homePhone}
        onChange={(e) => updateFormData('homePhone', e.target.value)}
      />

      <label htmlFor="mobilePhone">Mobile Phone</label>
      <input
        type="text"
        id="mobilePhone"
        value={formData.mobilePhone}
        onChange={(e) => updateFormData('mobilePhone', e.target.value)}
      />

      <label htmlFor="workPhone">Work Phone</label>
      <input
        type="text"
        id="workPhone"
        value={formData.workPhone}
        onChange={(e) => updateFormData('workPhone', e.target.value)}
      />

      <label htmlFor="faxNumber">Fax Number</label>
      <input
        type="text"
        id="faxNumber"
        value={formData.faxNumber}
        onChange={(e) => updateFormData('faxNumber', e.target.value)}
      />

      <h3>
        <strong>5. Address</strong>
      </h3>
      <div>Please provide your current contact address details.</div>
      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={formData.country}
        onChange={(e) => updateFormData('country', e.target.value)}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        value={formData.address}
        onChange={(e) => updateFormData('address', e.target.value)}
      />

      <label htmlFor="town">Suburb/Town</label>
      <input
        type="text"
        id="town"
        value={formData.town}
        onChange={(e) => updateFormData('town', e.target.value)}
      />

      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        value={formData.state}
        onChange={(e) => updateFormData('state', e.target.value)}
      />

      <label htmlFor="postcode">Postcode</label>
      <input
        type="number"
        id="postcode"
        value={formData.postcode}
        onChange={(e) => updateFormData('postcode', e.target.value)}
      />

      <h3>
        <strong>6. Cultural Details</strong>
      </h3>
      <div>Please provide your cultural details, including the country in which you were born and the main language spoken at home</div>

      <label htmlFor="birthCountry">Country of Birth</label>
      <input
        type="text"
        id="birthCountry"
        value={formData.birthCountry}
        onChange={(e) => updateFormData('birthCountry', e.target.value)}
      />

      <label htmlFor="homeLanguage">Main language spoken at home</label>
      <input
        type="text"
        id="homelanguage"
        value={formData.homeLanguage}
        onChange={(e) => updateFormData('homeLanguage', e.target.value)}
      />

      <label htmlFor="citizenship">Country of Citizenship</label>
      <input
        type="text"
        id="citizenship"
        value={formData.citizenship}
        onChange={(e) => updateFormData('citizenship', e.target.value)}
      />

      <label htmlFor="nricNumber">If you are Malaysian, please provide your NRIC Number</label>
      <input
        type="text"
        id="nricNumber"
        value={formData.nricNumber}
        onChange={(e) => updateFormData('nricNumber', e.target.value)}
      />
    </form>
  );
};

SecondSection.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string,
    homePhone: PropTypes.string,
    mobilePhone: PropTypes.string,
    workPhone: PropTypes.string,
    faxNumber: PropTypes.string,
    address: PropTypes.string,
    country: PropTypes.string,
    town: PropTypes.string,
    state: PropTypes.string,
    postcode: PropTypes.string,
    birthCountry: PropTypes.string,
    homeLanguage: PropTypes.string,
    citizenship: PropTypes.string,
    nricNumber: PropTypes.string,
  }).isRequired,
  onFormChange: PropTypes.func.isRequired,
};

export default SecondSection;
