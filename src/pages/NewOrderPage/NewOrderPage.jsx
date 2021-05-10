import { useState, useEffect } from 'react';

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(function() {
    console.log('useEffect ran smooth');
  });

  useEffect(function() {
    console.log('useEffect runs only after first render');
  }, [menuItems]);

  return (
    <>
      <h1>NewOrderPage</h1>
      <button onClick={() => setMenuItems(Date.now())}>Trigger re-render</button>
    </>
  );
}