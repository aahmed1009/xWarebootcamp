const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//TODO: Coding Challenge #1
// TODO:one player array for each team (variables 'players1' and 'players2')
const onePlayers = game.players
// console.log(onePlayers)
const [playersOne, playersTwo] = onePlayers
console.log(playersOne)
console.log(playersTwo)


//TODO:first player in any player array is the goalkeeper and the others are field players.
const [gk, ...players1] = playersOne
console.log(gk)
console.log(gk, ...players1)


//TODO:array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = []
allPlayers.push(game.players)
console.log(allPlayers)


//TODO:4. During the game, Bayern Munich (team 1) used 3 substitute players. 
const player1Final = [...playersOne, 'Thiago', 'Coutinho', 'Perisic']
console.log(player1Final)


//TODO:5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
game.odds['draw'] = game.odds['x'];
// console.log(game.odds)
delete game.odds['x'];
console.log(game.odds)


//TODO:6.a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console
const scorers = {}

function PrintGoals(scorers, ...players) {
    for (let players of game.scored) {
        scorers[players] ? scorers[players]++ : (scorers[players] = 1)

    }
    console.log(scorers)
}
console.log(PrintGoals(scorers))
game.odds.team1 < game.odds.team2 && console.log('team one with lower odds wins')
game.odds.team2 < game.odds.team1 && console.log('team two with lower odds wins')

//TODO: Coding Challenge #2
let scored = []
scored = game.scored
for (let i = 0; i < scored.length; i++) {
    console.log(` GOAl ${i+1}: ${scored[i]}!`);
}

let avg = Object.values(game.odds),
    Total = 0,
    average = 0;

for (let i = 0; i < avg.length; i++) {
    Total += avg[i];
}
average = Total / avg.length;
console.log(`Average Odds are ${average}`)

let Bayern = game.odds.team1
console.log(`odd of victory Bayern Munich: ${Bayern}`)
let Draw = game.odds.draw
console.log(`odd of draw: ${Draw}`)
let Dortmund = game.odds.team2
console.log(`odd of victory Borrussia Dortmund: ${Dortmund}`)



//TODO: Coding Challenge #3

const gameEvents = new Map([
    [17, ":soccer: GOAL"],
    [36, ":repeat: Substitution"],
    [47, ":soccer: GOAL"],
    [61, ":repeat: Substitution"],
    [64, ":large_orange_diamond: Yellow card"],
    [69, ":red_circle: Red card"],
    [70, ":repeat: Substitution"],
    [72, ":repeat: Substitution"],
    [76, ":soccer: GOAL"],
    [80, ":soccer: GOAL"],
    [92, ":large_orange_diamond: Yellow card"],
]);
let newEvents=new Set(gameEvents.values())
console.log(newEvents)

console.log(gameEvents.delete((64)))
console.log(gameEvents.has(64));

console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`)

const logs = function (i) {
    for (const [key, value] of i) {
        key <= 45 ? console.log(`[FIRST HALF] ${key}: ${value} `) : console.log(`[SECOND HALF] ${key}: ${value} `)
    }
}
logs(gameEvents)