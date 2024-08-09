"use client";

import React, { useEffect, useState } from "react";
import { initialGrid, keyboard, backspaceIcon, arraysEqual } from "./utils";
import "./page.scss";
import { getWord } from "../api/WordsApi";
import ModalLoose from "@/components/ModalLoose/ModalLoose";
import ModalWin from "@/components/ModalWin/ModalWin";

const Page = () => {
  const [arr, setArr] = useState<string[][]>(initialGrid);
  const [currentRow, setCurrentRow] = useState(0);
  const [gameOver, setGameOver] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [hideNotification, setHideNotification] = useState(false);
  const [word, setWord] = useState<string[]>([]);

  useEffect(() => {
    const fetchWord = async () => {
      const fetchedWord = await getWord();
      setWord(fetchedWord);
    };
    fetchWord();
  }, []);

  const showNotificationWithAnimation = () => {
    setNotification("This word is missing letters!");
    setShowNotification(true);
    setHideNotification(false);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setHideNotification(true);
    }, 3000); // Duration before hiding
  };

  const keyClick = (rowIndex: number, keyIndex: number) => {
    const key = keyboard[rowIndex][keyIndex];
    const newArr = arr.map((row) => [...row]);

    if (gameOver == null) {
      switch (key) {
        case "backspace":
          for (let i = arr[0].length - 1; i >= 0; i--) {
            if (newArr[currentRow][i] !== "") {
              newArr[currentRow][i] = "";
              break;
            }
          }
          break;

        case "enter":
          if (arraysEqual(newArr[currentRow], word)) {
            setGameOver("win");
            console.log(gameOver);
            return;
          } else {
            if (currentRow <= 5) {
              console.log(word);
              setCurrentRow((prevIndex) => prevIndex + 1);
            } else {
              setGameOver("loose");
              return;
            }
          }

          let isRowComplete = true;
          if (currentRow < 5) {
            for (let i = 0; i < arr[0].length; i++) {
              if (newArr[currentRow][i] === "") {
                isRowComplete = false;
                break;
              }
            }
          }

          if (isRowComplete) {
            for (let i = 0; i < arr[0].length; i++) {
              const cellId = `indexRow-${currentRow}-indexCol-${i}`;
              const cell = document.getElementById(cellId);
              if (cell) {
                if (newArr[currentRow][i] === word[i]) {
                  cell.style.backgroundColor = "green"; // Correct position
                } else if (word.includes(newArr[currentRow][i])) {
                  cell.style.backgroundColor = "orange"; // Correct letter, wrong position
                } else {
                  cell.style.backgroundColor = "gray"; // Incorrect letter
                }
              }
            }
          } else {
            showNotificationWithAnimation(); // Notify user if the row is not complete
          }
          break;

        default:
          for (let i = 0; i < arr[0].length; i++) {
            if (newArr[currentRow][i] === "") {
              newArr[currentRow][i] = key;
              break;
            }
          }
          break;
      }
      setArr(newArr);
    }
  };

  return (
    <div className="container">
      <div className="game-grid">
        {arr.map((row, indexRow) =>
          row.map((col, indexCol) => (
            <div
              className="cell"
              id={`indexRow-${indexRow}-indexCol-${indexCol}`}
              key={`${indexRow}-${indexCol}`}
            >
              {arr[indexRow][indexCol]}
            </div>
          ))
        )}
      </div>
      <div className="keyboard-container">
        {keyboard.map((row, rowIndex) => (
          <div className="keyboard-row" key={rowIndex}>
            {row.map((key, keyIndex) => (
              <div
                className={`key ${
                  key === "backspace"
                    ? "backspace"
                    : key === "enter"
                    ? "enter"
                    : ""
                }`}
                key={keyIndex}
                onClick={() => keyClick(rowIndex, keyIndex)}
              >
                {key === "backspace" ? backspaceIcon : key}
              </div>
            ))}
          </div>
        ))}
      </div>
      {notification && (
        <div
          className={`notification ${showNotification ? "show" : ""} ${
            hideNotification ? "hide" : ""
          }`}
        >
          {notification}
        </div>
      )}
      <div>
        {gameOver === "loose" && (
          <ModalLoose word={word} attemps={currentRow} />
        )}
      </div>
      <div>
        {gameOver === "win" && <ModalWin word={word} attemps={currentRow} />}
      </div>
    </div>
  );
};

export default Page;
