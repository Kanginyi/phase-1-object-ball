function gameObject() { //Return an object that has a fuckton of shit inside of it
    //Also, whoever wrote this shit, bless your soul for making Brendan Haywood's bumass look like the king of thieves with 22 steals
return {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turqoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    }
}
};

//Returns an object with the information of the home team
const homeTeamObject = () => gameObject().home;
//Returns a string of the home team name
const homeTeamName = () => gameObject().home.teamName;
//Returns an array of home team colors
const homeTeamColors = () => gameObject().home.colors;
//Returns an object with home team player information
const homeTeamPlayers = () => gameObject().home.players;

//Returns an object with the information of the away team
const awayTeamObject = () => gameObject().away;
//Returns a string of the away team name
const awayTeamName = () => gameObject().away.teamName;
//Returns an array of away team colors
const awayTeamColors = () => gameObject().away.colors;
//Returns an object with away team player information
const awayTeamPlayers = () => gameObject().away.players;


//Function that takes in a player's name and returns their number of points
const numPointsScored = (playerName) => {
    const playersObject = {...homeTeamPlayers(), ...awayTeamPlayers()};

    for (const player in playersObject) {
        if (player === playerName) {
            return playersObject[player].points;
        }
    }
}

//Function that takes in a player's name and returns their shoes size
const shoeSize = (playerName) => {
    const playersObject = {...homeTeamPlayers(), ...awayTeamPlayers()};

    for (const player in playersObject) {
        if (player === playerName) {
            return playersObject[player].shoe;
        }
    }
}

//Function that takes in a team's name and returns an array of their colors
const teamColors = (teamName) => {
    if (teamName === homeTeamName()) {
        return homeTeamColors();
    } else if (teamName === awayTeamName()) {
        return awayTeamColors();
    } else {
        return `The ${teamName} are not playing today :^(`;
    }
}

//Function that returns an array of the team names
const teamNames = () => {
    return [homeTeamName(), awayTeamName()];
}

//Function that takes in a team's name and returns and returns an array of the jersey numbers for that team
const playerNumbers = (teamName) => {
  let numbersArray = [];
  if (teamName === homeTeamName()) {
    for (const player in homeTeamPlayers()) {
      numbersArray.push(homeTeamPlayers()[player].number);
    }
  } else if (teamName === awayTeamName()) {
    for (const player in awayTeamPlayers()) {
      numbersArray.push(awayTeamPlayers()[player].number);
    }
  } else {
    return `The ${teamName} are not playing today :^(`;
  }
  return numbersArray;
}

//Function that takes in a player's name and returns an object of that player's stats
const playerStats = (playerName) => {
  for (const player in homeTeamPlayers()) {
    if (player === playerName) {
      return homeTeamPlayers()[player];
    } else {
      for (const player in awayTeamPlayers()) {
        if (player === playerName) {
          return awayTeamPlayers()[player];
        }
      }
    }
  }
}

//Function that returns that numbers of rebounds associated with the player that has the largest shoe size
const bigShoeRebounds = () => {
  const playersObject = {...homeTeamPlayers(), ...awayTeamPlayers()};

  let shoeSize = 0;
  
  for (const player in playersObject) {
    if (playersObject[player].shoe >= shoeSize) {
      shoeSize = playersObject[player].shoe;
    }
  }
  //shoeSize right now is 19, for Mason Plumlee, now return rebounds of 12
  for (const player in playersObject) {
    if (playersObject[player].shoe === shoeSize) {
      return `${player} has rebounded the ball ${playersObject[player].rebounds} times`;
    }
  }
}

//*****************BONUS QUESTIONS******************/
// 1) Which player has the most points? Call the function mostPointsScored
const mostPointsScored = () => {
  const playersObject = {...homeTeamPlayers(), ...awayTeamPlayers()};

  let points = 0;

  for (const player in playersObject) {
    if (playersObject[player].points >= points) {
      points = playersObject[player].points;
    }
  }
  //points right now is 33, for Ben Gordon, now return his name
  for (const player in playersObject) {
    if (playersObject[player].points === points) {
      return `${player} has scored ${points} points!`;
    }
  }
}

// 2) Which team has the most points? Call the function winningTeam
const winningTeam = () => {
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;

  for (const player in homeTeamPlayers()) {
    homeTeamPoints += homeTeamPlayers()[player].points;
  }
  //homeTeamPoints is now 96 for the Brooklyn Nets

  for (const player in awayTeamPlayers()) {
    awayTeamPoints += awayTeamPlayers()[player].points;
  }
  //awayTeamPoints is now 85 for the Charlotte Hornets

  if (homeTeamPoints > awayTeamPoints) {
    return `The ${homeTeamName()} won against the ${awayTeamName()} with a score of ${homeTeamPoints} to ${awayTeamPoints}!`
  } else {
    return `The ${awayTeamName()} won against the ${homeTeamName()} with a score of ${awayTeamPoints} to ${homeTeamPoints}!`
  }
}

// 3) Which player has the longest name? Call the function playerWithLongestName
const playerWithLongestName = () => {
  const playersObject = {...homeTeamPlayers(), ...awayTeamPlayers()};

  let longestName = 0;

  for (const player in playersObject) {
    let playerNoSpace = player.replace(" ", "");
    if (playerNoSpace.length >= longestName) {
      longestName = playerNoSpace.length;
    }
  }

  for (const player in playersObject) {
    if (player.length === longestName + 1) {
      return `${player} has the longest name with a length of ${longestName} characters without spaces and ${longestName + 1} characters with spaces!`;
    }
  }
} 

//*****************SUPER BONUS QUESTION******************/
//Function that returns true if the player with the longest name, had the most steals
//Call the function doesLongNameStealATon
const doesLongNameStealATon = () => {
  const playersObject = {...homeTeamPlayers(), ...awayTeamPlayers()};

  let longestName = 0;
  
  for (const player in playersObject) {
    let playerNoSpace = player.replace(" ", "");
    if (playerNoSpace.length >= longestName) {
      longestName = playerNoSpace.length;
    }
  }

  let mostSteals = 0;

  for (const player in playersObject) {
    if (playersObject[player].steals >= mostSteals) {
      mostSteals = playersObject[player].steals;
    }
  }

  for (const player in playersObject) {
    if (player.length === longestName + 1) {
      if (playersObject[player].steals === mostSteals) {
        return true;
      } else {
        return false;
      }
    }
  }
}