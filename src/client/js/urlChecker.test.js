const validURL = require('./urlChecker');

test('check URL', () => {
  expect(validURL('https://www.nytimes.com/2019/10/09/movies/joker-movie-controversy.html')).toBeTruthy;
});


