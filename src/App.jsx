import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/UI/SearchBar/SearchBar";
import UsersList from "./components/UI/UsersList/UsersList";
import useFetch from "./hooks/useFetch";

function App() {
  const [number, setNumber] = useState(1);
  const { fetchedData, error, loading } = useFetch(
    `https://randomuser.me/api/?results=${number}`
  );

  const handleChangeInput = (event) => {
    const value = event.target.value;
    setNumber(+value);
  };

  return (
    <>
      <Navbar />

      <div>
        <SearchBar onChangeInputNumber={handleChangeInput} number={number} />
        {!fetchedData?.results?.length && loading ? (
          <div>Loading...</div>
        ) : (
          <UsersList usersData={fetchedData?.results} number={number} />
        )}
      </div>
    </>
  );
}

export default App;
