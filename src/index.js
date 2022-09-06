import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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
const Author = () => <h4>Nguyen Quoc Nhat</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
