const addBtn = document.querySelector(".addBtn");
const extra = document.querySelector(".btnContent");
const backBtn = document.querySelector(".back-btn");
const doneBtn = document.querySelector(".btnContent-End button");
const inputText = document.querySelector("#enter-task");
const toDoUl = document.querySelector("ul");

toDoUl.innerHTML = localStorage.getItem("html");

addBtn.addEventListener("click", () => {
    extra.style.left = "0%";
});

backBtn.addEventListener("click", () => {
    extra.style.left = "100%";
});

doneBtn.addEventListener("click", () => {
    if (inputText.value != "") {
        extra.style.left = "100%";
        const li = document.createElement("li");
        li.innerText = inputText.value;
        inputText.value = "";
        toDoUl.append(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        localStorage.setItem("html", toDoUl.innerHTML)
    }
});

toDoUl.addEventListener("click", (value) => {
    if (value.target.tagName === "SPAN") {
        value.target.parentElement.remove();
    }
    else if (value.target.tagName === "LI") {
        value.target.classList.toggle("toggleClass");
    }
    localStorage.setItem("html", toDoUl.innerHTML)
});