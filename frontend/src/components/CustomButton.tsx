'use client';

import { VariantProps, cva } from 'class-variance-authority'

const variants = cva(
  "px-4 py-4 text-white text-center font-medium text-lg", {
  variants: {
    variant: {
      normal: "bg-@primary rounded-md",
      underline: "underline"
    }
  },
  defaultVariants: {
    variant: 'normal'
  }
}
)

interface CustomButtonProps
  extends VariantProps<typeof variants>,
  React.HTMLAttributes<HTMLButtonElement> { }


export default function CustomButton({ className, variant, children, ...rest }: CustomButtonProps) {
  return (
    <button className={variants({ className, variant })} {...rest}>
      {children}
    </button>
  )
}