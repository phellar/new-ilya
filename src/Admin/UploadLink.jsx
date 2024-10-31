import React, { useState } from 'react';
import supabase from '../Config/SupabaseClient';
import './UploadLink.css'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import FullBtn from '../Component/FullBtn';





const UploadLink = () => {
  const [eventName, setEventName] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [error, setError] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!eventName || !eventLink) {
      setError('Both event name and event link are required');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('live-event')
        .insert([{ event_name: eventName, event_link: eventLink }]);

      if (error) {
        setError(error.message);
      } else {
        setUploadStatus('Link uploaded successfully!');
        setEventName('');
        setEventLink('');
        setError('');
      }
    } catch (err) {
      setError('An error occurred while uploading the link');
    }
  };

  return (
    <>
        <Header/>
        <section className='upload'>
            <div className="container">
                <form onSubmit={handleUpload} className='form' id='form'>
                <div className='form-group'>
                    <label>Event Name:</label>
                    <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="Enter event name"
                    />
                </div>

                <div className='form-group'>
                    <label>Event Link:</label>
                    <input
                    type="text"
                    value={eventLink}
                    onChange={(e) => setEventLink(e.target.value)}
                    placeholder="Enter event link"
                    />
                </div>
                <FullBtn>Upload Live Event</FullBtn>
                </form>

                {uploadStatus && <p>{uploadStatus}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </section>
        <Footer/>
    </>
  );
};

export default UploadLink;
