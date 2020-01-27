import { commitizenConfig } from '../commitizenConfig';

describe('commitizenConfig', () => {
  test('should match snapshot', () => {
    expect(commitizenConfig).toMatchSnapshot();
  });
});
