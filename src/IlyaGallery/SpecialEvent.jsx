import React, { useState, useEffect } from "react";
import supabase from '../Config/SupabaseClient';
import FullBtn from '../Component/FullBtn'

const SpecialEvent = () => {
  const [images, setImages] = useState([]); // Array to hold image URLs
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [totalPages, setTotalPages] = useState(1); // State for total number of pages
  const [loading, setLoading] = useState(false); // Loading state
  const imagesPerPage = 10; // Set how many images per page
  const folderPath = "Event"; // Replace with your folder name in the bucket

  // Fetch the total count of images in the bucket
  const fetchTotalCount = async () => {
    const { data, error } = await supabase.storage
      .from("image") // Replace with your bucket name
      .list(folderPath);

    if (error) {
      console.error("Error fetching image count:", error.message);
      return;
    }

    if (data) {
      const totalImages = data.length;
      setTotalPages(Math.ceil(totalImages / imagesPerPage)); // Calculate total pages
    }
  };


  const fetchImages = async () => {
    setLoading(true);

    const { data, error } = await supabase.storage
      .from("image") 
      .list(folderPath, {
        limit: imagesPerPage,
        offset: (currentPage - 1) * imagesPerPage,
      });

    if (error) {
      console.error("Error fetching images:", error.message);
      setLoading(false);
      return;
    }

    if (data && data.length > 0) {
      const imageUrls = data.map((file) => {
        const { data: urlData, error: urlError } = supabase.storage
          .from("image")
          .getPublicUrl(`${folderPath}/${file.name}`);

        if (urlError) {
          console.error("Error fetching public URL:", urlError.message);
          return null;
        }
        
        return urlData.publicUrl;
      }).filter(Boolean); 
      
      setImages(imageUrls);
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
    fetchImages(); 
  }, [currentPage]);

  return (
    <div>
      <h1>SPECIAL EVENTS (OBENGS/REUNION)</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="image-grid">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image} alt={`Event ${index}`} width="200" />
              </div>
            ))
          ) : (
            <p>No images found</p>
          )}
        </div>
      )}

      <div className="pagination">
        {/* Previous Button */}
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

export default SpecialEvent;
