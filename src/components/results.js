import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Results = ({ books, onSelectBook }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.id} className="w-72">
          <Card>
            <button onClick={() => onSelectBook(book)}>
              <CardHeader>
                <CardTitle className="truncate">
                  {book.volumeInfo.title}
                </CardTitle>
                <CardDescription className="truncate">
                  {book.volumeInfo.authors?.join(", ")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  className="w-20 h-28 mr-4"
                  width={80}
                  height={80}
                />
              </CardContent>
            </button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Results;
