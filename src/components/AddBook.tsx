import { action, observable, toJS } from "mobx";
import { observer } from "mobx-react";
import Form from "react-bootstrap/Form";
import { useBookStore } from "./BookStore";
import Button from "react-bootstrap/Button";
import Book from "./Book";

type FormState = {
  name: string;
  author: string;
  price: number;
};

const formState: FormState = observable({
  name: "",
  author: "",
  price: 0,
});

const AddBook = () => {
  const { addBook, totalCost } = useBookStore();

  const clearForm = () => {
    formState.name = "";
    formState.author = "";
    formState.price = 0;
  };

  return (
    <div className="flex-column m-b-5">
      <h2 className="m-b-2">Add book</h2>
      <Form.Control
        size="lg"
        type="text"
        className="m-b-2"
        placeholder="Name"
        value={formState.name}
        onChange={action((e) => {
          formState.name = e.target.value;
        })}
      />
      <Form.Control
        size="lg"
        type="text"
        className="m-b-2"
        placeholder="Author"
        value={formState.author}
        onChange={action((e) => {
          formState.author = e.target.value;
        })}
      />
      <Form.Control
        size="lg"
        type="text"
        placeholder="Price"
        className="m-b-2"
        value={formState.price}
        onChange={action((e) => {
          formState.price = Number(e.target.value);
        })}
      />
      <Button
        variant="dark"
        onClick={action(() => {
          addBook(
            new Book(formState.name, formState.author, formState.price)
          );
          clearForm();
        })}
      >
        Add
      </Button>
    </div>
  );
};

export default observer(AddBook);
