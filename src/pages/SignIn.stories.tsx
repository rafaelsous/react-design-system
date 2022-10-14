import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

import { SignIn } from './SignIn';

export default {
  title: 'pages/SignIn',
  component: SignIn,
  args: {},
  argsType: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.text('Login realizado com sucesso!'));
        }),
      ],
    },
  },
} as Meta;

export const  Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  
    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'jonhdoe@example.com');
    userEvent.type(canvas.getByPlaceholderText('************'), 'secret');
    userEvent.click(canvas.getByRole('button'));
  
    await waitFor(() => expect(canvas.getByText('Login realizado com sucesso!')).toBeInTheDocument());
  }
};
