import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "./ui/input";

const Search = ({ onResults }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        onResults([]);
        return;
      }

      setLoading(true);

      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
        onResults(response.data.items || []);
      } catch (error) {
        console.error(error);
        onResults([]);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query, onResults]);

  return (
    <>
      <Input
        placeholder="Search for your next great read..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p className="mt-2">Loading...</p>}
    </>
  );
};

export default Search;
