import { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2 text-gray-200">
        {Story()}
        <Text size="sm">Lembrar de mim pelos próximos 30 dias</Text>
      </div>
    )
  ],
} as Meta<CheckboxProps>;

export const  Default: StoryObj<CheckboxProps> = {}
