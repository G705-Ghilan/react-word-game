export default function WordBox({
  letter,
  userLetters,
  originalLetters,
  isOver,
}) {
  const isSigned = userLetters.includes(letter);
  return (
    <div
      className="word-box"
      style={{
        color: isOver && !isSigned ? "var(--incorrect-btn-color)" : undefined,
      }}
    >
      {isOver || isSigned ? <p>{letter}</p> : undefined}
    </div>
  );
}
