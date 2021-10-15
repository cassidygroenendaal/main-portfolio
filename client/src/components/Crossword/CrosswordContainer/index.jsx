import React, { useState, useEffect } from 'react';

import { Puzzle, ClueContainer } from '../';

const CrosswordContainer = () => {
  const [possibleWords, setPossibleWords] = useState([]);
  const [board, setBoard] = useState({ words: [] });
  const [puzzleTheme, setPuzzleTheme] = useState('');
  const [selectedWord, setSelectedWord] = useState(-1);

  const cellSizePx = 30;

  const puzzleThemes = [
    'forest',
    'farm',
    'ocean',
    'sky',
    'star',
    'magic',
    'animals',
    'desert'
  ];

  const testWords = [
    {
      word : 'sky',
      defs : ['a\tThe thing that is blue and hangs between earth and space']
    },
    {
      word : "Flat-screen TV's",
      defs : ['a\tlarge items you watch shows on in your living room']
    },
    {
      word : 'Space Station',
      defs : ['a\tThe ISS is one of these']
    },
    {
      word : 'Space Station',
      defs : ['a\tThe ISS is one of these']
    },
    {
      word : '"This is a quote"',
      defs : ['a\tThis is a quote']
    },
    {
      word : 'breed',
      defs : ['a\tBreed']
    },
    {
      word        : 'bred',
      defs        : ['a\tBred'],
      defHeadword : 'breed'
    },
    {
      word        : 'breeding',
      defs        : ['a\tBreeding'],
      defHeadword : 'breed'
    }
  ];

  const generateCrossword = () => {
    const randIndex = Math.floor(Math.random() * puzzleThemes.length);

    setPuzzleTheme(puzzleThemes[randIndex]);
    generateWordList({ theme: puzzleThemes[randIndex], limit: 5 });
  };

  const generateWordList = async ({ theme, limit }) => {
    // let generatedWords;
    let generatedWords = testWords;
    // await fetch(`https://api.datamuse.com/words?rel_trg=${theme}&md=ds`)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     generatedWords = data;
    //   });

    // Filter out any duplicate words
    const uniqueWords = generatedWords.filter(
      (item, index) => generatedWords.findIndex(obj => obj.word === item.word) === index
    );

    setPossibleWords(getFinalWords(uniqueWords, limit));
  };

  const generateIntersections = () => {
    if (possibleWords.length === 0) return;

    console.log('Generating intersections...');

    let unusedWords = possibleWords;
    const newBoard = {};
    const isFirstWordVertical = Math.floor(Math.random() * 2) % 2 === 0;
    const longToShort = possibleWords.sort((a, b) => a.word <= b.word);

    unusedWords = possibleWords.filter(w => w.word !== longToShort[0].word);

    newBoard.words = [
      {
        ...longToShort[0],
        isVertical    : isFirstWordVertical,
        intersections : [],
        startY        : 0,
        startX        : 0
      }
    ];

    const randIndex = Math.floor(Math.random() * unusedWords.length);
    

    setBoard(newBoard);

    console.log('Possible Words:', possibleWords);
    console.log('Unused Words:', unusedWords);
    console.log('Board Words:', newBoard.words);
  };

  const getFinalWords = (words, limit) => {
    const finalWords = [];

    let doGetNewWords = true;

    while (doGetNewWords) {
      let success = true;

      const randIndex = Math.floor(Math.random() * words.length);
      const newWord = words[randIndex];

      // Remove selected word so it can't be chosen again, regardless of success
      words.splice(randIndex, 1);

      // If there is no definition, skip it
      if (newWord.defs === undefined) {
        success = false;
      }

      // If the new word is in any way derived to/from another word, skip it
      if (finalWords.find(existingWord => existingWord.defHeadword === newWord.word)) {
        success = false;
      }

      if (
        finalWords.find(
          existingWord =>
            existingWord.defHeadword !== undefined &&
            existingWord.defHeadword === newWord.defHeadword
        )
      ) {
        success = false;
      }

      if (finalWords.find(existingWord => existingWord.word === newWord.defHeadword)) {
        success = false;
      }

      if (success) finalWords.push(newWord);

      if (finalWords.length === limit || words.length === 0) doGetNewWords = false;
    }

    return formatWords(finalWords);
  };

  const formatWords = words =>
    words.map(item => {
      const count = [],
        letters = [],
        clueText = item.defs !== undefined ? item.defs[0].split('\t')[1] : 'No Clue',
        splitWords = item.word.toUpperCase().split(' '),
        singleWord = splitWords.join('').toUpperCase().split('');

      let firstIndex = -1,
        lastIndex = -1;

      // Calculate how many letters are in each word for the clue
      splitWords.forEach(word => {
        const splitWord = word.split('');
        let numLetters = 0;

        splitWord.forEach(letter => {
          if (/^[A-Z0-9]+$/.test(letter)) numLetters++;
        });

        count.push(numLetters);
      });

      // Set up letters array
      singleWord.forEach(letter => {
        letters.push({ character: letter, isAlphaNum: /^[A-Z0-9]+$/.test(letter) });
      });

      // Get the first and last alphanumeric index
      letters.forEach((l, i) => {
        // Get first index
        if (firstIndex === -1 && l.isAlphaNum) {
          firstIndex = i;
        }

        // Get last index
        if (l.isAlphaNum) {
          lastIndex = i;
        }
      });

      return {
        word       : item.word.toUpperCase(),
        letters,
        clue       : { text: clueText, count },
        firstIndex,
        lastIndex
      };
    });

  useEffect(
    () => generateIntersections(),
    // eslint-disable-next-line
    [possibleWords]
  );

  return (
    <div>
      <h1>{puzzleTheme}</h1>
      <button onClick={generateCrossword}>Generate Crossword</button>
      {possibleWords.length > 0 && (
        <div>
          <Puzzle
            puzzleWords={board.words}
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
          />
          <ClueContainer puzzleWords={board.words} selectedClue={selectedWord} />
        </div>
      )}
    </div>
  );
};

export default CrosswordContainer;
