import "./Button.css";

export const Button = ({ handleCount, children }) => {
  return (
    <div className="button-container">
      <button onClick={handleCount} className="btn">
        {children}
      </button>
    </div>
  );
};
