export default function ThankYouState({ number }) {
  return (
    <main className="ThankYouState">
      <img
        className="image-thank"
        src="./illustration-thank-you.svg"
        alt="illustration-thank-you"
      />
      <div className="wrap-title">
        <p className="title-state2">You selected {number || 0} out of 5</p>
      </div>
      <h2>Thank you!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
}
