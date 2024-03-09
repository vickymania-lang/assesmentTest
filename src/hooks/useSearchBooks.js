import { useEffect, useMemo, useState } from "react";

export default function useSearchBooks({ data = [] }) {
  const [searchInput, setSearchInput] = useState("");
  const [sortingType, setSortingType] = useState("ascending");
  const [searchResult, setSearchResult] = useState([]);

  const filteredBooks = useMemo(() => {
    if (!searchInput) {
      return data;
    }
    const normalizedSearchInput = searchInput.toLowerCase();

    const filtered = data.filter((book) => {
      const normalizedBooksName = `${book.name}`.toLowerCase();
      const normalizedBooksCategory = book.category.toLowerCase();
      return (
        normalizedBooksName.includes(normalizedSearchInput) ||
        normalizedBooksCategory.includes(normalizedSearchInput)
      );
    });
    return filtered;
  }, [searchInput, data]);
  const filteredData = filteredBooks;

  useEffect(() => {
    
    setSearchResult(filteredData);
  }, [filteredBooks, filteredData]);

  return {
    searchInput,
    setSearchInput,
    sortingType,
    setSortingType,
    searchResult,
  };
}
