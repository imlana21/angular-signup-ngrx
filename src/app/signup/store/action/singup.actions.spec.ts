import * as fromSingup from './singup.actions';

describe('loadSingups', () => {
  it('should return an action', () => {
    expect(fromSingup.loadSingups().type).toBe('[Singup] Load Singups');
  });
});
