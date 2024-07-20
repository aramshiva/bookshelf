import { useState } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
import Modal from '../components/modal';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectBook = (book: any) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Book Search</h1>
      <Search onResults={setBooks} />
      <Results books={books} onSelectBook={handleSelectBook} />
      {selectedBook && <Modal book={selectedBook} onClose={handleCloseModal} />}
    </div>
  );
}
