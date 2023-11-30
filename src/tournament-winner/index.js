/**
 * tournamentWinner
 * @returns string
 *
 * competitions = [[HTML, "C#"], [C#, "Python"], ["Python", HTML]]
 * results =      [     0             0                 1        ]
 *
 * - i need `forLoop` to iterate over [competitions]
 * - while looping over the competitions, i also want to iterate over result
 * - competitions.length === result.length
 * - i can use a hashmap to store the results of each team
 *
 * [HOME, AWAY]
 * if the value in result is 1 -> HOME team wins
 */

const POINTS = 3;

const tournamentWinner = (competitions, results) => {
  const leader = { name: '', score: -Infinity };
  const scoreboard = new Map();

  competitions.forEach((teams, index) => {
    const winner = results[index] === 1 ? teams[0] : teams[1];
    const score = scoreboard.get(winner);

    if (scoreboard.has(winner)) scoreboard.set(winner, score + POINTS);
    else scoreboard.set(winner, POINTS);

    if (leader.score < scoreboard.get(winner)) {
      leader.name = winner;
      leader.score = scoreboard.get(winner);
    }
  });

  return leader.name;
};

module.exports = tournamentWinner;
