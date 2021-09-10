import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

// API CALLS FOR VOCAB CARDS

const dbUrl = firebaseConfig.databaseURL;

// GET VOCAB
const getVocab = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE VOCAB
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then(() => {
      getVocab().then(resolve);
    })
    .catch(reject);
});

// CREATE VOCAB
const createVocab = (newEntryData) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, newEntryData)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/vocab/${firebaseKey}.json`, { firebaseKey })
        .then(() => getVocab(newEntryData.uid).then((allVocab) => resolve(allVocab)));
    })
    .catch((errors) => reject(errors));
});

export { getVocab, createVocab, deleteVocab };
