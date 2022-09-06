import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";
const books = [
  {
    id: 1,
    img: "https://media.geeksforgeeks.org/img-practice/Layer2-1637062356.svg",
    title: "I love you to the moon",
    author: "Nguyen Quoc Nhat",
  },

  {
    id: 2,
    img: "https://media.geeksforgeeks.org/img-practice/Layer2(1)-1637066767.svg",
    title: "Our class is my family",
    author: "John Wick",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Alert message
      </button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
