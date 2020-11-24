import axios from 'axios';
import config from '../config';

export default axios.create({baseURL: config.apiEndpoint});
// axios.create() - creates new instance with provided options like baseURL. No need to repeat baseURL.