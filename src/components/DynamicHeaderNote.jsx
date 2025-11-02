import gameLanguages from "../gameLanguages";
import HeaderNote from "./HeaderNote";

export default function DynamicHeaderNote({
  isWin,
  isLose,
  incorrectCount,
  userLetters,
  originalLetters,
}) {
  if (isWin) {
    return <HeaderNote title="You win!" subtitle="Well done! 🎉" style="win" />;
  } else if (isLose) {
    return (
      <HeaderNote
        title="Game over!"
        subtitle="You lose! Better start learning Assembly 😭"
        style="over"
      />
    );
  } else if (
    incorrectCount > 0 &&
    !originalLetters.includes(userLetters.at(-1))
  ) {
    return (
      <HeaderNote
        subtitle={gameLanguages[incorrectCount - 1].loseNote}
        style="note"
      />
    );
  }
  return <HeaderNote title="" subtitle="" style="" />;
}
