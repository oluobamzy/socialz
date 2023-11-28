import Chat from './chat';
import Welcome from './Welcome';
import {useState } from 'react';
export default function Main(){
  const [isWelcome, setIsWelcome] = useState(true);

  return (
    <div>
      {isWelcome ? (
        <Welcome setIsWelcome={setIsWelcome} />
      ) : (
        <Chat />
      )}
    </div>
  );
};
