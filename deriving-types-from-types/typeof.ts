let username = "Alireza";

console.log(typeof username);

type Username = typeof username;

const settings = {
  difficulty: "easy",
  minLevel: "10",
  didStart: false,
  players: ["Alireza", "Arshia"],
};

type Settings = typeof settings;

// function loadData(settings: Settings) {
//   //...
// }

function loadData(s: typeof settings) {
  //...
}

loadData(settings);
