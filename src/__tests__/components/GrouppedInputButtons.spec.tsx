import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import GrouppedInputButtons from '../../components/GrouppedInputButtons';
import '@testing-library/jest-dom';

const mockedSetValue = jest.fn();
const mockedHandleDecrement = jest.fn();

describe('SignIn Page', () => {
  it('should not be able to decrement when value equals to 0', async () => {
    const { getByTestId } = render(
      <GrouppedInputButtons value={0} setValue={mockedSetValue} />,
    );
    const buttonMinus = getByTestId('button-minus');

    fireEvent.click(buttonMinus);

    await wait(() => {
      expect(mockedHandleDecrement).not.toHaveBeenCalled();
    });
  });

  it('should be able to decrement  when value equals to 1', async () => {
    const { getByTestId, queryByText } = render(
      <GrouppedInputButtons value={1} setValue={mockedSetValue} />,
    );
    const buttonMinus = getByTestId('button-minus');

    fireEvent.click(buttonMinus);

    await wait(() => {
      expect(jest.fn()).toHaveBeenCalled();
    });
  });
});
