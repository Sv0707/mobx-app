import React, { ReactNode, useContext, useRef } from "react";
import { makeAutoObservable } from "mobx";
import Book from "./Book";

export default class BookStore {
  constructor(books: Book[]) {
    this.books = books;
    makeAutoObservable(this);
  }

  state: string = "";
  setState = (state: string) => {
    this.state = state;
  };

  books: Book[] = [];
  setBooks = (books: Book[]) => {
    this.books = books;
  };

  get totalCost(): number {
    return this.books.reduce(
      (totalCost, currentBook) => totalCost + currentBook.price,
      0
    );
  }

  addBook = (book: Book) => {
    this.books.push(book);
  }

  deleteBook = (book: Book) => {
    const index = this.books.indexOf(book)
    this.books.splice(index, 1);
  }
}

const BookStoreContext = React.createContext<BookStore>(
  null as unknown as BookStore
);

export const useBookStore = () => useContext(BookStoreContext);

type Props = {
  children: ReactNode;
  books: Book[];
};

export const BookStoreProvider = ({ children, books }: Props) => {
  const store = useRef(new BookStore(books));

  return (
    <BookStoreContext.Provider value={store.current}>
      {children}
    </BookStoreContext.Provider>
  );
};
