import { useEffect, useState } from "react";
import axios from "axios";

const useFetchProperties = (url) => {
  const [career, setCareer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsFeed, setNewsFeed] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get(url);
      setCareer(response.data.data); // Adjust if your data structure is different
      setNewsFeed(response.data.data)
      setLoading(false);
      // console.log(properties)
      // console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { career, loading, error, newsFeed };
};

export default useFetchProperties;
