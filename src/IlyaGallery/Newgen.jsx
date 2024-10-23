import React, { useState, useEffect } from "react";
import supabase from '../Config/SupabaseClient';

const Newgen = () => {
  const [mediaFiles, setMediaFiles] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  const [loading, setLoading] = useState(false); 
  const mediaPerPage = 10; 
  const folderPath = "Newgen"; 

  // Function to check if the file is an image based on its extension
  const isImage = (fileName) => {
    return /\.(jpg|jpeg|png|gif)$/i.test(fileName);
  };

  // Function to check if the file is a video based on its extension
  const isVideo = (fileName) => {
    return /\.(mp4|webm|ogg)$/i.test(fileName);
  };

  // Fetch the total count of media files in the bucket
  const fetchTotalCount = async () => {
    const { data, error } = await supabase.storage
      .from("image")
      .list(folderPath);

    if (error) {
      console.error("Error fetching media count:", error.message);
      return;
    }

    if (data) {
      const totalMedia = data.length;
      setTotalPages(Math.ceil(totalMedia / mediaPerPage)); 
    }
  };

  // Fetch images and videos from Supabase bucket
  const fetchMediaFiles = async () => {
    setLoading(true);

    const { data, error } = await supabase.storage
      .from("image") 
      .list(folderPath, {
        limit: mediaPerPage,
        offset: (currentPage - 1) * mediaPerPage,
      });

    if (error) {
      console.error("Error fetching media:", error.message);
      setLoading(false);
      return;
    }

    if (data && data.length > 0) {
      const mediaUrls = data.map((file) => {
        const { data: urlData, error: urlError } = supabase.storage
          .from("image")
          .getPublicUrl(`${folderPath}/${file.name}`);

        if (urlError) {
          console.error("Error fetching public URL:", urlError.message);
          return null;
        }

        return { url: urlData.publicUrl, name: file.name }; // Return the URL and file name
      }).filter(Boolean); 
      
      setMediaFiles(mediaUrls);
    } else {
      console.log("No data found in the folder");
    }

    setLoading(false);
  };

  // Handle page changes
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle Next page navigation
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Handle Previous page navigation
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    fetchTotalCount(); 
  }, []);

  useEffect(() => {
    fetchMediaFiles(); 
  }, [currentPage]);

  return (
    <div>
      <h1>NEW GENERATION</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="image-grid">
          {mediaFiles.length > 0 ? (
            mediaFiles.map((media, index) => (
              <div key={index} className="media-item">
                {isImage(media.name) ? (
                  <img src={media.url} alt={`Media ${index}`} width="200" />
                ) : isVideo(media.name) ? (
                  <video  controls>
                    <source src={media.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>
            ))
          ) : (
            <p>No media found</p>
          )}
        </div>
      )}

      <div className="pagination">
        <button className="btn-ds" onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>

        {/* Numbered pagination */}
        <div className="num">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={currentPage === index + 1 ? "active" : "not-active"}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button className="btn-ds" onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Newgen;
