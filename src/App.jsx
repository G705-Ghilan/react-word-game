import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeaderNote from "./components/HeaderNote";
import LanguageItem from "./components/LanguageItem";
import gameLanguages from "./gameLanguages";
import { englishLetters, getRandomWord } from "./gameWords";
import WordBox from "./components/WordBox";
import { KeyboardLetterBtn } from "./components/KeyboardLetterBtn";
import DynamicHeaderNote from "./components/DynamicHeaderNote";

export default function App() {
  const [state, setState] = useState({
    incorrectCount: 0,
    isWin: false,
    isLose: false,
    word: getRandomWord(),
    userLetters: [],
  });

  useEffect(() => {
    let hasAllLetters = state.word
      .split("")
      .every((l) => state.userLetters.includes(l));
    let isEndOfTries = state.incorrectCount >= 8;
    if (hasAllLetters) {
      setState((prev) => ({ ...prev, isWin: true }));
    } else if (isEndOfTries) {
      setState((prev) => ({ ...prev, isLose: true }));
    }
  }, [state.userLetters, state.incorrectCount]);

  return (
    <>
      <div className="game-container">
        {/* Header */}
        <Header>
          <DynamicHeaderNote
            isWin={state.isWin}
            isLose={state.isLose}
            incorrectCount={state.incorrectCount}
            userLetters={state.userLetters}
            originalLetters={state.word}
          />
        </Header>

        {/* Languages */}
        <div className="languages-wrapper">
          {gameLanguages.map((language, index) => {
            return (
              <LanguageItem
                language={language}
                disabled={index < state.incorrectCount}
              />
            );
          })}
        </div>
        {/* Word boxes */}
        <div className="words-wrapper">
          {state.word.split("").map((letter) => {
            return (
              <WordBox
                letter={letter}
                userLetters={state.userLetters}
                originalLetters={state.word}
                isOver={state.isLose}
              />
            );
          })}
        </div>

        {/* Keyboard */}
        <div
          className="keyboard-wrapper"
          style={{
            opacity: state.isLose || state.isWin ? 0.3 : 1,
          }}
        >
          {englishLetters.map((letter) => {
            return (
              <KeyboardLetterBtn
                letter={letter}
                userLetters={state.userLetters}
                originalLetters={state.word}
                inActive={
                  state.isLose ||
                  state.isWin ||
                  state.userLetters.includes(letter)
                }
                onClick={function () {
                  setState((prev) => {
                    let newData = {
                      ...prev,
                      userLetters: [...state.userLetters, letter],
                    };
                    if (!state.word.includes(letter)) {
                      newData.incorrectCount++;
                    }
                    return newData;
                  });
                }}
              />
            );
          })}
        </div>
        {/* New Game */}
        {state.isLose || state.isWin ? (
          <button
            onClick={function () {
              setState({
                incorrectCount: 0,
                isWin: false,
                isLose: false,
                word: getRandomWord(),
                userLetters: [],
              });
            }}
          >
            New Game
          </button>
        ) : undefined}
      </div>
    </>
  );
}
