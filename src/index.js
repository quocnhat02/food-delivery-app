import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
const author = "Nguyen Quoc Nhat";
const title = "I love you to the moon";
const img =
  "https://media.geeksforgeeks.org/img-practice/Layer2-1637062356.svg";

function BookList() {
  return (
    <section className="bookList">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
