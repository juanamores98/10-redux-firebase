import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import AuthRouter from './routers/AuthRouter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthRouter />
    </>
  );
}

export default App;
