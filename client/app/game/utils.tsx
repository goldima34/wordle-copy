import React from 'react';

//array for user letters
const numRows = 6;
const numCols = 5;
export const initialGrid = Array.from({ length: numRows }, () => Array(numCols).fill(''));

//keyboard array
export const keyboard = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], 
                         ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 
                         ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace']]
    



export const backspaceIcon = <><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" data-testid="icon-backspace"><path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg></>

export const arraysEqual = (arr1: string[], arr2: string[]): boolean => {
    try{
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    } catch (e) {
        return false
    }

};