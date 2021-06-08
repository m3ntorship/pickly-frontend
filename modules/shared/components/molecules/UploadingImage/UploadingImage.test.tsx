import * as React from 'react';
import * as renderer from 'react-test-renderer';
import UploadingImage from './UploadingImage';

describe('Testing component with snapshot', () => {
  it('Testing component with required props', () => {
    const tree = renderer
      .create(<UploadingImage textInputLetter="A" textInputId="1" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
