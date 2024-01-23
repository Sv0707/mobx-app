import { observer } from "mobx-react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useBookStore } from "./BookStore";
import { action, toJS } from "mobx";

const Roster = () => {
  const { books, deleteBook, totalCost } = useBookStore();
  return (
    <>
      <h1>Books</h1>
      <Table variant="dark">
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Name</th>
            <th>Author</th>
            <th>Price, $</th>
            <th />
          </tr>
        </thead>
        {books.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>{item.price}</td>
            <td style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="danger"
                className="button"
                onClick={action(() => deleteBook(item))}
              >
                x
              </Button>
            </td>
          </tr>
        ))}
      </Table>
      <div className="m-b-2 flex-end">Total cost, $: {toJS(totalCost).toString()}</div>
    </>
  );
};

export default observer(Roster);
