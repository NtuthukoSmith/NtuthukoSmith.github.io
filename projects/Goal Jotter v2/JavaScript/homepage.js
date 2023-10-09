const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () =>
container.classlist.add("hover-left") 
);

left.addEventListener("mouseleave", () =>
container.classlist.remove("hover-left") 
);

right.addEventListener("mouseenter", () =>
container.classlist.add("hover-right") 
);

right.addEventListener("mouseleave", () =>
container.classlist.add("hover-right") 
);

