import axios from 'axios';

export default {
  Test: {
    testAll: function() {
      return axios.get('/api/projects/web-dev')
    }
  }
}
