import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    // Fetch data from the API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setLoading(true)
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
