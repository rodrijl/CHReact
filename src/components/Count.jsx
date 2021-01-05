import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clickeaste {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button onClick={() => setCount(count - 1)}>
        Remove
      </button>
    </div>
  );
}

export default Count;
