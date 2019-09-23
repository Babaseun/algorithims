let register = [
 { name: 'Tolu', age: 54, game: 'Chess' },
 { name: 'Ikenna', age: 19, game: 'Catch' },
 { name: 'Adammu', age: 78, game: 'FuzzBuzz' },
 { name: 'David', age: 23, game: 'Chess' }
];

function returnPlayersForAgame(arr, choosegame) {
 var getPlayers = arr.filter((x) => x.game === choosegame);
 return getPlayers.map((player) => player.name);
}
console.log(returnPlayersForAgame(register, 'Chess'));
