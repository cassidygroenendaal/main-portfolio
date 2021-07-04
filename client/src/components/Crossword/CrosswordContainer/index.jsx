import React, { useState, useEffect } from 'react';

// import API from '../../../lib/API';

import { Puzzle, ClueContainer } from '../';

const CrosswordContainer = () => {
  const [puzzleWords, setPuzzleWords] = useState([]);
  const [puzzleTheme, setPuzzleTheme] = useState('');
  const [selectedWord, setSelectedWord] = useState(-1);

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
      clue : { text: 'The thing that is blue and hangs between earth and space' }
    },
    {
      word : "Flat-screen TV's",
      clue : { text: 'large items you watch shows on in your living room' }
    },
    {
      word : 'Space Station',
      clue : { text: 'The ISS is one of these' }
    },
    {
      word : 'Space Station',
      clue : { text: 'The ISS is one of these' }
    },
    {
      word : '"This is a quote"',
      clue : { text: 'This is a quote' }
    }
  ];

  const generateCrossword = () => {
    const randIndex = Math.floor(Math.random() * puzzleThemes.length);

    setPuzzleTheme(puzzleThemes[randIndex]);
    generateWordList({ theme: puzzleThemes[randIndex], limit: 2 });
  };

  const generateWordList = async ({ theme, limit }) => {
    // let generatedWords;
    // await fetch(`https://api.datamuse.com/words?rel_trg=${theme}`)
    fetch(`https://api.datamuse.com/words?rel_trg=${theme}`)
      .then(res => res.json())
      .then(data => {
        console.log('Data:', data);
        // generatedWords = data;
      });

    // console.log('Generated Words:', generatedWords);

    // Filter out any duplicate words
    const uniqueWords = testWords.filter(
      (item, index) => testWords.findIndex(obj => obj.word === item.word) === index
    );

    const formattedWords = formatWords(uniqueWords);
    console.log(formattedWords);
    setPuzzleWords(formattedWords);
    // getDefinitions(generatedWords.filter((v, i, a) => a.indexOf(v) === i), limit);
  };

  // const getDefinitions = async (wordsToDefine, limit) => {
  //   const wordsToSet = await API.Crossword
  //     .getDefinitions(wordsToDefine, limit)
  //     .then(response => response.words)
  //     .catch(err => console.log(err));

  //   console.log(wordsToSet);
  //   setPuzzleWords(wordsToSet);
  // };

  const generateIntersections = () => {
    if (puzzleWords.length === 0) return;

    console.log('Generating intersections');
  };

  const formatWords = words =>
    words.map(item => {
      const count = [],
        letters = [],
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
        clue       : { ...item.clue, count },
        firstIndex,
        lastIndex
      };
    });

  useEffect(
    () => generateIntersections(),
    // eslint-disable-next-line
    [puzzleWords]
  );

  return (
    <div>
      <h1>{puzzleTheme}</h1>
      <button onClick={generateCrossword}>Generate Crossword</button>
      {puzzleWords.length > 0 && (
        <div>
          <Puzzle
            puzzleWords={puzzleWords}
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
          />
          <ClueContainer puzzleWords={puzzleWords} selectedClue={selectedWord} />
        </div>
      )}
    </div>
  );
};

export default CrosswordContainer;
