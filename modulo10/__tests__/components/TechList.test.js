import React from 'react';

import TechList from '../../src/components/TechList';

import {render, fireEvent} from '@testing-library/react-native';

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => {
    const {TouchableHighlight} = require('react-native');
    const MockTouchable = (props) => {
      return <TouchableHighlight {...props} />;
    };
    MockTouchable.displayName = 'TouchableOpacity';

    return MockTouchable;
  },
);

describe('TechList', () => {
  it('shoul be able to add new tech ', () => {
    const {getByTestId, getByText} = render(<TechList />);

    fireEvent.changeText(getByTestId('tech-input'), 'Node.js');
    fireEvent.press(getByText('Adicionar'));

    expect(getByText('Node.js')).toBeTruthy();
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});
