import React, {cloneElement} from 'react'

type Props = {
    children: string,
    color?: "default" | "primary" | "secondary" | "danger",
    variant?: "fill" | "outline" | "text",
    size?: "sm" | "md" | "lg",
    disableShadow?: boolean,
    disabled?: boolean,
    endIcon?:  JSX.Element,
    startIcon?: JSX.Element,
}

const Button = ({ children, color = "default", variant = "fill",
    size = "md", disableShadow = false, disabled = false, startIcon, endIcon }: Props) => {

  return (
      <button disabled={disabled} className={`btn-component ${color} ${variant} ${size}${disableShadow ? " disableShadow" : ""}`}>
          {startIcon}
          {children}
          {endIcon}
      </button>
  )
}

export default Button