import main from '../src/index';

jest.mock('express', () => ({
  Router: jest.fn(() => 'mock Router'),
}));

describe('index tests', () => {
  it('should export the express router', () => {
    expect(main).toBe('mock Router');
  });
});
