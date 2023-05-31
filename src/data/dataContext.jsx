import React, { createContext, useState } from "react";
import axios from "axios";


// Create the context
const DataContext = createContext();

// Create the context provider component
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = (searchQuery, filterType, currentPage) => {
    const query = searchQuery ? `&q=${searchQuery}` : "";
    const type = filterType ? `&type=${filterType}` : "";
    const url = `${import.meta.env.VITE_API_URL}a/?page=${currentPage}${query}${type}`;
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
  const fetchPerson = (searchQuery, filterType, currentPage) => {
    const query = searchQuery ? `&q=${searchQuery}` : "";
    const type = filterType ? `&found=${filterType}` : "";
    const url = `${import.meta.env.VITE_API_URL}person/?page=${currentPage}${query}${type}`;
    setLoading(true);
    console.log({ "searchQuery": searchQuery, "filterType": filterType, "currentPage": currentPage });
    axios
      .get(url)
      .then((response) => {
        setPersons(response.data);
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };


  return (
    <DataContext.Provider value={{ data, loading, fetchData, fetchPerson, persons }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider };
