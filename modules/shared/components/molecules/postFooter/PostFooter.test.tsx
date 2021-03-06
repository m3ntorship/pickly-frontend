import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PostFooter from './PostFooter';

describe('Testing Footer with snapshot', () => {
  it('Testing Footer with required props', () => {
    const tree = renderer
      .create(<PostFooter numberOfVotes={120} showResult />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing Footer with required props', () => {
    const tree = renderer
      .create(<PostFooter numberOfVotes={120} showResult />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
