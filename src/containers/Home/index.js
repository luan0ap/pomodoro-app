import React from 'react';

import Actions from '../../components/Actions';
// import Input from "../../components/Input";
import Value from '../../components/Value';

const Home = ({
  value,
  startTimer,
  pauseTimer,
  resetTimer,
  getMinutes,
  getSeconds,
}) => {
  return (
    <div className="pomodoro">
      <h1> Pomodoro </h1>
      <Value value={value} getMinutes={getMinutes} getSeconds={getSeconds} />
      {/* <Input /> */}
      <Actions
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default Home;
