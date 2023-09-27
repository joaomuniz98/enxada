'use client';

import { VariantProps, cva } from "class-variance-authority";

import cn from "@/utils/cn";



const variants = cva(
  "flex gap-2 ", {
  variants: {
    variant: {
      normal: ""
    }
  },
  defaultVariants: {
    variant: "normal"
  }
})
interface LogoProps
  extends React.HTMLAttributes<HTMLImageElement>,
  VariantProps<typeof variants> { }

export default function Logo({ className, variant, ...props }: LogoProps) {
  return (
    <div className={cn(variants({ className, variant }))}>
      <img src="/logo.png" alt="Logo image" {...props} className="mix-blend-luminosity" />
      <h5 className="text-@strong font-inter text-white">Enxada</h5>
    </div>
  )
}