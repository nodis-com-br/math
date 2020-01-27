import { moduleResolver } from '../babelConfig';

describe('babelConfig', () => {
  test('should match snapshot', () => {
    expect(moduleResolver).toMatchSnapshot();
  });
});
