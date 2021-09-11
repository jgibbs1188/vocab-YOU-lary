import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

// API CALLS FOR VOCAB CARDS

const dbUrl = firebaseConfig.databaseURL;

// GET VOCAB CARDS
const getVocab = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE VOCAB CARD
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then(() => {
      getVocab().then(resolve);
    })
    .catch(reject);
});

// GET SINGLE VOCAB CARD
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// CREATE VOCAB CARD
const createVocab = (newEntryData) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, newEntryData)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/vocab/${firebaseKey}.json`, { firebaseKey })
        .then(() => getVocab(newEntryData.uid).then((allVocab) => resolve(allVocab)));
    })
    .catch((errors) => reject(errors));
});

// UPDATE VOCAB CARD
const updateVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${vocabObj.firebaseKey}.json`, vocabObj)
    .then(() => getVocab().then(resolve))
    .catch(reject);
});

export {
  getVocab,
  createVocab,
  deleteVocab,
  getSingleVocab,
  updateVocab
};
