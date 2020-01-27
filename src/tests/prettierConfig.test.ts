import { prettierConfig } from '../prettierConfig';

describe('prettierConfig', () => {
  test('should match snapshot', () => {
    expect(prettierConfig).toMatchSnapshot();
  });
});
