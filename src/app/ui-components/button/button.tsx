'use client';
import React from 'react';
import styles from './button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <div className={styles['button-container']}>
      <button {...props} />
    </div>
  );
}

export default Button;
