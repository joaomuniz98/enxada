'use client';
import { FaDollarSign } from 'react-icons/fa';
import { VariantProps, cva } from 'class-variance-authority'



const variants = cva(
  "px-4 py-4 text-white text-center font-medium text-lg", {
  variants: {
    variant: {
      normal: "bg-@dark rounded-md",
      underline: "underline"
    }
  },
  defaultVariants: {
    variant: 'normal'
  }
}
)

interface CustomInputProps
  extends VariantProps<typeof variants>,
  React.HTMLAttributes<HTMLInputElement> { }


export default function CustomInput({ className, variant, children, ...rest }: CustomInputProps) {
  return (
    <div className="relative">
      <input type='text' className={variants({ className, variant })} {...rest} />
      <div className="absolute inset-y-0 left-0 flex items-center  pl-2">
        <FaDollarSign style={{ color: "#ffffff" }} />
      </div>
    </div>
  )
}