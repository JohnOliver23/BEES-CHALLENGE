import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import GrouppedInputButtons from '../../components/GrouppedInputButtons';
import * as functions from '../../lib/functions';
import '@testing-library/jest-dom';

const mockedSetValue = jest.fn();

describe('SignIn Page', () => {
  it('should not be able to decrement when value equals to 0', async () => {
    const spyHandleDecrement = jest.spyOn(functions, 'handleDecrement');
    const { getByTestId } = render(
      <GrouppedInputButtons value={0} setValue={mockedSetValue} />,
    );
    const buttonMinus = getByTestId('button-minus');

    fireEvent.click(buttonMinus);

    await wait(() => {
      expect(spyHandleDecrement).not.toHaveBeenCalled();
    });
  });

  it('should be able to decrement  when value equals to 1', async () => {
    const spyHandleDecrement = jest.spyOn(functions, 'handleDecrement');
    const { getByTestId } = render(
      <GrouppedInputButtons value={1} setValue={mockedSetValue} />,
    );
    const buttonMinus = getByTestId('button-minus');

    fireEvent.click(buttonMinus);

    await wait(() => {
      expect(spyHandleDecrement).toHaveBeenCalledWith(1);
    });
  });

  it('should be able to increment  when value equals to 0', async () => {
    const spyHandleIncrement = jest.spyOn(functions, 'handleIncrement');
    const { getByTestId } = render(
      <GrouppedInputButtons value={0} setValue={mockedSetValue} />,
    );
    const buttonPlus = getByTestId('button-plus');

    fireEvent.click(buttonPlus);

    await wait(() => {
      expect(spyHandleIncrement).toHaveBeenCalledWith(0);
    });
  });

  it('should be able to change value by input', async () => {
    const spyHandleIncrement = jest.spyOn(functions, 'handleIncrement');
    const { getByTestId } = render(
      <GrouppedInputButtons value={0} setValue={mockedSetValue} />,
    );
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: '1' } });

    await wait(() => {
      expect(mockedSetValue).toHaveBeenCalledWith(1);
    });
  });
});
