const {millisToMinutesAndSeconds} = require('../utils/helperFunctions');

describe('millisToMinutesAndSeconds', () => {
  it('returns the formatted duration', () => {
    const millis = 65300;

    const result = millisToMinutesAndSeconds(millis);
    const expected = '1:05';

    expect(result).toEqual(expected);
  });

  it(' duration less than a minute then return 0 minutes and just seconds', () => {
    const millis = 7230;

    const result = millisToMinutesAndSeconds(millis);
    const expected = '00:07';

    expect(result).toEqual(expected);
  });
});
