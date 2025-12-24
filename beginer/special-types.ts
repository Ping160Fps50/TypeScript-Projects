let a: null | string;

a = "alireza";

a = null;

const inputEl = document.getElementById("input") as HTMLInputElement;

console.log(inputEl?.value);
