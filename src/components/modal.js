import React from 'react';

const Modal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">{book.volumeInfo.title}</h2>
        <p className="text-lg"><strong>Author(s):</strong> {book.volumeInfo.authors?.join(', ')}</p>
        <p className="text-lg"><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
        <p className="text-lg"><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
        <p className="text-lg"><strong>ISBN:</strong> {book.volumeInfo.industryIdentifiers?.map(identifier => identifier.identifier).join(', ')}</p>
        <p className="mt-4">{book.volumeInfo.description}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
