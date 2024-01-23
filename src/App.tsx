import "./App.css";
import Roster from "./components/Roster";
import AddBook from "./components/AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookStoreProvider } from "./components/BookStore";
import Book from "./components/Book";

const IronFlame = new Book("Iron Flame", "Rebecca Yarros", 15);
const TheHeaven = new Book(
  "The Heaven & Earth Grocery Store",
  "James McBride",
  16
);

function getBooksFromTheBackend(): Book[] {
  return [IronFlame, TheHeaven];
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookStoreProvider books={getBooksFromTheBackend()}>
          <AddBook />
          <Roster />
        </BookStoreProvider>
      </header>
    </div>
  );
}

export default App;
