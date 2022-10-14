import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={clsx(
        "py-3 px-4 bg-cyan-700 rounded font-semibold text-black text-sm w-full hover:bg-cyan-800 transition-colors focus:ring-2 ring-white",
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
}