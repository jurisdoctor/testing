import './Counter.styles.css';

import { Button } from './Button/Button';
import { Header } from '../Header/Header';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <Button onClick={() => setCount((prev) => prev + 1)} title="+" />
      <Button onClick={() => setCount((prev) => prev - 1)} title="-" />
      <div role="contentinfo" className="counter-text">
        Count is {count}
      </div>
    </div>
  );
};
