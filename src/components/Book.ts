import { makeObservable, observable, action } from "mobx";

class Book {
  name: string;
  author: string;
  price: number;

  constructor(name: string, author: string, price: number) {
    this.name = name;
    this.author = author;
    this.price = price;

    makeObservable(this, {
      author: observable,
      price: observable,
      name: observable,
    });
  }
}

export default Book;
