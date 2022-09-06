import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";
const books = [
  {
    img: "https://media.geeksforgeeks.org/img-practice/Layer2-1637062356.svg",
    title: "I love you to the moon",
    author: "Nguyen Quoc Nhat",
  },

  {
    img: "https://media.geeksforgeeks.org/img-practice/Layer2(1)-1637066767.svg",
    title: "Our class is my family",
    author: "John Wick",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        const { img, title, author } = book;
        return (
          <div>
            <h3>{title}</h3>
            <h6>{author}</h6>
          </div>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
