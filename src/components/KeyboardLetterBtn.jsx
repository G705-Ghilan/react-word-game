export function KeyboardLetterBtn({
  letter,
  userLetters,
  originalLetters,
  inActive,
  onClick,
}) {
  const assigned = userLetters.includes(letter);
  const isCorrect = assigned && originalLetters.includes(letter);
  return (
    <div
      className="keyboard-letter"
      style={{
        
        backgroundColor: assigned
          ? isCorrect
            ? "var(--correct-color)"
            : "var(--incorrect-btn-color)"
          : undefined,
      }}
      onClick={inActive ? () => {} : onClick}
    >
      <p>{letter}</p>
    </div>
  );
}
