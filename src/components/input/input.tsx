import React from 'react';
import styles from './input.module.scss';

interface InputProps {
  value: string;
  onChange: (value: string, evt?: React.ChangeEvent) => void;
}

export const Input: React.FC<InputProps> = ({ value, onChange }) => {
  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value, evt);
  };

  return <input className={styles.input} value={value} onChange={handleOnChange} autoFocus />;
};
