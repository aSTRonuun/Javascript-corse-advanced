const elements = [
    {tag: "p", text: "Hello World to p tag"},
    {tag: "div", text: "Hello World to div tad"},
    {tag: "section", text: "Hello World to section tag"},
    {tag: "footer", text: "Hello World to footer tag"}
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for(let i=0; i<elements.length; i++) {
    let { tag, text } = elements[i];
    let element = document.createElement(tag);
    let textElement = document.createTextNode(text);
    element.appendChild(textElement);
    div.appendChild(element);
}

container.appendChild(div);
