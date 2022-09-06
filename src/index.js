import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = "Nguyen Quoc Nhat";
const Book = () => {
  const title = "I love you to the moon";

  return (
    <article className="book">
      <img
        src="https://media.geeksforgeeks.org/img-practice/Layer2-1637062356.svg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{7 + 10}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
