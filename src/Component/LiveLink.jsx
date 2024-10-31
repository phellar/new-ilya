import React, { useState, useEffect } from 'react';
import supabase from '../Config/SupabaseClient';
import { Link } from 'react-router-dom';

const LiveLink = () => {
  const [LiveEvent, setLiveEvent] = useState([]);
  const [fetchErr, setFetchErr] = useState("");

  useEffect(() => {
    const fetchLiveEvent = async () => {
      try {
        const { data, error } = await supabase
          .from('live-event')
          .select();

        if (error) {
          setFetchErr(error.message);
        } else if (data) {
          setLiveEvent(data);
        }
      } catch (error) {
        setFetchErr(error.message);
      }
    };

    fetchLiveEvent();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="">
        <h2 className='event-head'>Join Our Live Event</h2>
        </div>

        {fetchErr && <p>{fetchErr}</p>}
        {LiveEvent.length > 0 ? (
          LiveEvent.map((live, id) => (
            <Link key={id} to={live.event_link}>
              {live.event_name}
            </Link>
          ))
        ) : (
          <p>No live events available</p>
        )}
      </div>
    </section>
  );
};

export default LiveLink;
