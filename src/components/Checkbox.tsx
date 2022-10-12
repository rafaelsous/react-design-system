import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {
  checked?: boolean;
}

export function Checkbox({ checked = false }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded flex items-center justify-center"
    >
      <CheckboxPrimitive.CheckboxIndicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  )
}