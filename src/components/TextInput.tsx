import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex flex-items gap-3 h-12 py-3 px-4 bg-gray-800 rounded w-full outline-none focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  );
}

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputInput({ ...rest }: TextInputInputProps) {
  return (
    <input
      className="min-h-12 flex-1 bg-transparent outline-none font-bold text-gray-100 text-xs placeholder:text-gray-400"
      {...rest}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};