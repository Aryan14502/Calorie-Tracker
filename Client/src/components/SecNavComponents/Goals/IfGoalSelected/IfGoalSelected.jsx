import React from 'react'
import './ifgoalselected.css';


function IfGoalSelected({ userGoal, onChangeGoalClick }) {
  return (
    <div className="goal-selected">
      <h2>You've Already selected a goal!</h2>
      <p>Your current goal is: <strong>{userGoal}</strong></p>
      <button className="change-goal-btn" onClick={onChangeGoalClick}>
        Change Goal
      </button>
      <p>Click the button above to change your goal.</p>
    </div>
  )
}

export default IfGoalSelected
