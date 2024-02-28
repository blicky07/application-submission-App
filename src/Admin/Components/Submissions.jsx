// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('http://localhost:5000/applications');
        const submissionData = await response.json();
        setSubmissions(submissionData);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  const handleViewDetails = () =>{


  }

  const handleDownloadPdf = () =>{


  }

  const handleEditSubmission = () =>{


  }

  const handleDeleteSubmission = async (submissionId) => {
    try {
    
      await fetch(`http://localhost:5000/admin/users/${submissionId}`, {
        method: "DELETE",
      });
      setSubmissions(submissions.filter((submission) => submission.id !== submissionId));
    } catch (error) {
      console.error("Error deleting user:", error);
    } 
  }; 
  return (
    <div>
      <h2>Submissions List</h2>
      {/* Add filtering options here */}
      <ul>
        {submissions.map((submission) => (
          <li key={submission.id}>
            <div>
              <p>Name: {submission.applicantName}</p>
              {/* Display other submission details here */}
              {/*<button onClick={() => handleDownloadPdf(submission.id)}>Download PDF</button>*/}
              <button onClick={() => handleViewDetails(submission.id)}>View Details</button>
              <button onClick={() => handleDeleteSubmission(submission.id)}>Delete Application</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submissions;
