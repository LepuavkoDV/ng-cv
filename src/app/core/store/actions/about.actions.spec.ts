import * as fromAbout from './about.actions';

describe('loadAbouts', () => {
  it('should return an action', () => {
    expect(fromAbout.loadAbouts().type).toBe('[About] Load Abouts');
  });
});
