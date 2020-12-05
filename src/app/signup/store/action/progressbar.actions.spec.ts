import * as fromProgressbar from './progressbar.actions';

describe('loadProgressbars', () => {
  it('should return an action', () => {
    expect(fromProgressbar.loadProgressbars().type).toBe('[Progressbar] Load Progressbars');
  });
});
