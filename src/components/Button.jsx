export default function Button({ onClick, buttonType, children }) {
  return (
    <button onClick={onClick}
      className={`btn ${buttonType === 'secondary' ? 'brn--secondary' : ''}`}
    >
      {children}
    </button>
  );
}
