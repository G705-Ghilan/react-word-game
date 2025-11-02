export default function Header({ children }) {
  return (
    <div className="header">
      <div className="header-texts">
        <h1 className="title-large">Assembly: Endgame</h1>
        <p className="body-medium subtitle-color">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </div>
      {children}
    </div>
  );
}
