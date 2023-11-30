const findTournamentWinner = require('./index'); // Update with the correct path

describe('Tournament Winner Tests', () => {
  // Test Case 1: Single Match - Winner First Team
  test('Single Match - Winner First Team', () => {
    const competitions = [['TeamA', 'TeamB']];
    const results = [1];
    expect(findTournamentWinner(competitions, results)).toBe('TeamA');
  });

  // Test Case 2: Single Match - Winner Second Team
  test('Single Match - Winner Second Team', () => {
    const competitions = [['TeamA', 'TeamB']];
    const results = [0];
    expect(findTournamentWinner(competitions, results)).toBe('TeamB');
  });
});
