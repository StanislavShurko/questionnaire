'use client';
import React from 'react';
import styles from './button.module.scss';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <div className={styles['button-container']}>
      <button {...props} />
    </div>
  );
}

export default Button;
