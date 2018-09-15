import { Ibuprofen } from './mockApi';

const apiKey = 'bumpy bat';
const getDrugsUrl = (name = 'Ibuprofen') =>
  `https://health.axa.ch/hack/api/drugs?name=${name}`;

const getPatientInformationLeafletUrl = medId =>
  `http://104.248.17.7:5000/api/v1/pills/summary?swissMedId=47504`;
// const getPatientInformationLeafletUrl = medId =>
// `http://104.248.17.7:5000/api/v1/pills/summary?swissMedId=${medId}`;

export const getDrugs = name => {
  return new Promise((resolve, reject) => {
    fetch(getDrugsUrl(name), {
      method: 'GET',
      headers: {
        Authorization: 'real receipt',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log({ responseJsonDrugs: responseJson });
        resolve(responseJson);
        return responseJson;
      })
      .catch(error => {
        reject();
        console.error(error);
      });
  });
};

export const getLeaflet = id => {
  fetch(getPatientInformationLeafletUrl(id))
    .then(response => response.json())
    .then(responseJson => {
      console.log({ responseJson });
      return responseJson.movies;
    })
    .catch(error => {
      console.error(error);
    });
};

// TODO: Replace with API call here!
// export const getDrugs = () => Ibuprofen;
