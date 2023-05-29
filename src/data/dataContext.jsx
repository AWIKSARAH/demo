import React, { createContext, useState } from "react";
import axios from "axios";

// Create the context
const DataContext = createContext();

// Create the context provider component
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = (searchQuery, filterType, currentPage) => {
    const query = searchQuery ? `&q=${searchQuery}` : "";
    const type = filterType ? `&type=${filterType}` : "";
    const url = `http://localhost:5000/api/a/?page=${currentPage}${query}${type}`;
    // const
    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(true);
      });
  };

  return (
    <DataContext.Provider value={{ data, loading, fetchData }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider };
