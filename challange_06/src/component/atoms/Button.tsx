import React, { FC } from 'react'

interface ButtonProps {
    nameBtn : string;
    variant : string;
    costomeStyle? : string;
    onClick? : () => void;
}

const Button : FC<ButtonProps> = ({nameBtn, variant, costomeStyle, onClick} : ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn ${variant} ${costomeStyle}`}>{nameBtn}</button>
  )
}

export default Button