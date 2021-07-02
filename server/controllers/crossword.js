//===========================================
// Dependencies
//-------------------------------------------

const router = require('express').Router(),
  axios = require('axios');

//===========================================
// Routes
//-------------------------------------------
// GET: Definitions of Many
//-------------------------------------------

router.post('/definitions/', async (req, res) => {
  const { wordsToDefine, limit } = req.body;
  const selectedWords = [];

  while (selectedWords.length < limit) {
    const randIndex = Math.floor(Math.random() * wordsToDefine.length);
    const wordToDefine = wordsToDefine[randIndex];
    wordsToDefine.splice(randIndex, 1);

    let success = true;

    let newWord = axios({
      method : 'GET',
      url    : `https://dictionaryapi.com/api/v3/references/collegiate/json/${wordToDefine.word}?key=${process
        .env.MERRIAM_WEBSTER_KEY}`
    })
      .then(response => {
        if (!response.data[0].shortdef) success = false;
        return { word: wordToDefine.word, clue: response.data[0].shortdef[0] };
      })
      .catch(err => console.log(err));

    if (!success) return;
    selectedWords.push(newWord);
  }

  Promise.all(selectedWords).then(response => res.json({ words: response }));

  // NOTE: Below is how to do axios calls in a .map format

  // const promisedArray = wordsToDefine.map(el => {
  //   return axios({
  //     method : 'GET',
  //     url    : `https://dictionaryapi.com/api/v3/references/collegiate/json/${el.word}?key=${process
  //       .env.MERRIAM_WEBSTER_KEY}`
  //   })
  //     .then(response => {
  //       return { ...el, clue: response.data[0].shortdef[0] };
  //     })
  //     .catch(err => console.log(err));
  // });

  // Promise.all(promisedArray).then(response => {
  //   console.log(response);
  //   res.json({ words: response });
  // });

});

module.exports = router;
