import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
// setup vars
const firstBook = {
  img: "https://media.geeksforgeeks.org/img-practice/Layer2-1637062356.svg",
  title: "I love you to the moon",
  author: "Nguyen Quoc Nhat",
};

const secondBook = {
  img: "https://media.geeksforgeeks.org/img-practice/Layer2(1)-1637066767.svg",
  title: "Our class is my family",
  author: "John Wick",
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
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
