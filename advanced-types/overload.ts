function getLength(val: string): string;
function getLength(val: any[]): number;
function getLength(val: string | any[]) {
  if (typeof val === "string") {
    let numberOfWords = val.split(" ").length;
    return `${numberOfWords} Words`;
  }
  return val.length;
}

const numOfWords = getLength("Hello World");
const numOfItems = getLength(["Sports", "Games"]);
