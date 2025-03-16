import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {}, "Hello world using React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// reactdom will create root element
// root.render(heading);
//  to render the data in dom(browser)

{
  /* <div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag")
  )
);

root.render(parent);

{
  /* <div id="parent">
      <div id="child">
          <h1>I am an h1 tag</h1>
          <h2>I am an h2 tab</h2>
      </div>
  </div> */
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"), //array of childern
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ])
// );

// console.log(parent);
// root.render(parent);
