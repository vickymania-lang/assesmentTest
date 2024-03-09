import React, { useState } from "react";
import { books } from "../data";
import useSearchBooks from "../hooks/useSearchBooks";
import { Link } from "react-router-dom";

function Main() {
  const { searchInput, setSearchInput, searchResult } = useSearchBooks({
    data: books,
  });
  // const counter
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleSelectedBook = (data) => {
    const existingBookIndex = selectedBooks.findIndex(
      (book) => book.id === data.id
    );

    if (existingBookIndex !== -1) {
      const updatedSelectedBooks = [...selectedBooks];
      updatedSelectedBooks[existingBookIndex].count += 1;
      setSelectedBooks(updatedSelectedBooks);
    } else {
      const newBook = { ...data, count: 1 };
      setSelectedBooks((prevSelectedBooks) => [newBook, ...prevSelectedBooks]);
    }
  };
  const currentDate = new Date();

  return (
    <>
      <section>
      <h1>List of available books</h1>
        <input
          className="searchButton"
          type="search"
          placeholder="Search for books"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
       
      </section>

      <h3>Today books count and equivalent date</h3>

      <div className="CountBook">
        {selectedBooks.map((data) => {
          return (
            <div style={{color: 'white'}} key={data.id}>
              <p>{data.name}</p>
              <span style={{fontWeight: '30px', margin: '0 10px' }}>Today Count:{data.count}</span>
              <span>{currentDate.toDateString()}</span>
            </div>
          );
        })}
      </div>

      <section className="mainStyle">
        {searchResult.map((data) => {
          return (
            <div className="mainFlex" key={data.id}>
              <button style={{class: 'row', class: 'col'}} className="detailsButton" onClick={() => handleSelectedBook(data)}>
                <h2>{data.name}</h2>
                <div>
                  <span className="CandV">Category:{data.category}</span>
                  <span className="CandV">volume: {data.volumes}</span>
                </div>
                <div>
                  <span className="TandI">Tag: {data.tag}</span>
                  <span className="TandI">ISBN: {data.ISBN}</span>
                </div>
              </button>

              <button className="getBook">
                <Link to={`/book/${data.id}`}>Get the book</Link>
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Main;
