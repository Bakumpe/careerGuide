import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../.config";

function CareerList({ category }) {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        console.log(`Fetching careers for category: ${category}`);
        const response = await axios.get(
          `${config.apiBackend}/api/career?Category=${category}`
        );
        console.log("Response:", response); // Log the entire response
        console.log("Data:", response.data); // Log the response data

        if (Array.isArray(response.data)) {
          setCareers(response.data);
        } else {
          throw new Error("Unexpected data format");
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching careers:", err); // Log the error
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCareers();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Careers in {category}</h2>
      <ul>
        {careers.map((career) => (
          <li key={career.id}>{career.Title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CareerList;
