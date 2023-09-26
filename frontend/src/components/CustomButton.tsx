'use client';

import { VariantProps, cva } from 'class-variance-authority'

const variants = cva(
  "px-4 py-4 text-center font-medium text-lg", {
  variants: {
    variant: {
      normal: "bg-@primary text-white rounded-md",
      underline: "underline text-white",
      inverted: "text-@primary bg-white rounded-md"
    }
  },
  defaultVariants: {
    variant: 'normal'
  }
}
)

interface CustomButtonProps
  extends VariantProps<typeof variants>,
  React.ButtonHTMLAttributes<HTMLButtonElement> { }


export default function CustomButton({ className, variant, children, ...rest }: CustomButtonProps) {
  return (
    <button className={variants({ className, variant })} {...rest}>
      {children}
    </button>
  )
}