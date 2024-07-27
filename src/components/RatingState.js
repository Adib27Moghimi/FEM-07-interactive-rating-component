import { useState } from "react";
import Button from "./Button.js";

export default function RatingState({ number, setNumber, onShowState }) {
  const [activeNum, setActiveNum] = useState("");

  function handleSelectNum(num) {
    setActiveNum("active");
    setNumber(num);
  }

  return (
    <main className="RatingState">
      <span className="star">
        <img className="starImage" src="./icon-star.svg" alt="icon-star" />
      </span>
      <h2 className="poppins-bold">How did we do?</h2>
      <p className="text-state1">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="wrap-num">
        {Array.from({ length: 5 }, (_, i) => (
          <li
            className={`rat num ${i + 1 === number && activeNum}`}
            onClick={() => handleSelectNum(i + 1)}
            key={i}
          >
            {i + 1}
          </li>
        ))}
      </ul>
      <Button onClick={onShowState} className={"button submit"}>
        {"SUBMIT"}
      </Button>
    </main>
  );
}
