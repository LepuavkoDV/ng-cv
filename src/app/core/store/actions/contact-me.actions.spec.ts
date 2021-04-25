import * as fromContactMe from './contact-me.actions';

describe('loadContactMes', () => {
  it('should return an action', () => {
    expect(fromContactMe.loadContactMes().type).toBe('[ContactMe] Load ContactMes');
  });
});
