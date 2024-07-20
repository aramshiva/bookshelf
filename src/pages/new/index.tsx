import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Index() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setLoading(true);
    try {
      const response = fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-20">
        <p className="pb-9 text-lg font-semibold">Bookshelf</p>
        <Input
          placeholder="Search for a book..."
          className="w-72"
          value={searchValue}
          onChange={handleInputChange}
        />
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
}
