import React from "react";

const Actions = ({ startTimer, pauseTimer, resetTimer }) => {
  return (
    <div className="actions">
      <button onClick={startTimer}> Iniciar </button>
      <button onClick={pauseTimer}> Pausar </button>
      <button onClick={resetTimer}> Resetar </button>
    </div>
  );
};

export default Actions;
