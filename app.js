// const heading = document.createElement("h1")
// heading.innerHTML = "Namaste Everyone From Javascript";
// document.querySelector('#root').appendChild(heading);
const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      color: "blue",
    },
  },
  "Namaste Everyone"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    style: {
      color: "blue",
    },
  },
  "Namaste Everyone"
);
const container = React.createElement("div", { id: "container" }, [
  heading2,
  heading,
]);
// {} ->
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); // render will modify and override DOM.
