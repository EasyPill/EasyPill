import { Ibuprofen } from './mockApi';

const apiKey = 'bumpy bat';
const getDrugsUrl = (name = 'Ibuprofen') =>
  `https://health.axa.ch/hack/api/drugs?name=${name}`;

// TODO: Replace with API call here!
export const getDrugs = () => Ibuprofen;
