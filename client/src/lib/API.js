import axios from 'axios';

export default {
  Test      : {
    testAll : function() {
      return axios.get('/api/projects/web-dev');
    }
  },
  Crossword : {
    getDefinitions : function(wordsToDefine, limit) {
      return axios
        .post(`/api/cw/definitions/`, { wordsToDefine, limit })
        .then(results => {
          console.log('from API:', results);
          return results.data;
        });
    }
  }
};
