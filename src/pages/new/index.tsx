import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Index() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="p-20">
        <p className="pb-9 text-lg font-semibold">Bookshelf</p>
        <Input
          placeholder="Search for a book..."
          className="w-96"
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
