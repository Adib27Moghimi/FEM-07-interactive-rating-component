import { useState } from "react";
import RatingState from "./RatingState.js";
import ThankYouState from "./ThankYouState.js";

export default function InteractiveRating() {
  const [number, setNumber] = useState(null);
  const [showState1, setShowState1] = useState(true);
  const showState2 = !showState1;

  function handleShowState() {
    setShowState1((show) => !show);
  }

  return (
    <div>
      {showState1 && (
        <RatingState
          number={number}
          setNumber={setNumber}
          onShowState={handleShowState}
        />
      )}
      {showState2 && <ThankYouState number={number} />}
    </div>
  );
}
