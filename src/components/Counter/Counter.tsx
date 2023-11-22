import './Counter.styles.css';

import { Button } from '../Button/Button';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <Button onClick={() => setCount((prev) => prev + 1)} title="+" />
      <Button onClick={() => setCount((prev) => prev - 1)} title="-" />
      <div role="contentinfo" className="counter-text">
        Count is {count}
      </div>
    </div>
  );
};
