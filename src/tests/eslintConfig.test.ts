import { typescriptReactNative, typescriptReactWeb } from '../eslintConfig';

describe('eslintConfig', () => {
  test('typescriptReactNative should match snapshot', () => {
    expect(typescriptReactNative).toMatchSnapshot();
  });

  test('typescriptReactWeb should match snapshot', () => {
    expect(typescriptReactWeb).toMatchSnapshot();
  });
});
