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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://media.geeksforgeeks.org/img-practice/Layer2-1637062356.svg"
    alt=""
  />
);

const Title = () => <h1>I love you to the moon</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Nguyen Quoc Nhat
  </h4>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
