const URL_BACKEND =  window.location.hostname.includes('localhost')
    ? 'http://localhost:5000'
    : 'https://alura-flix-bruno-fernandes.herokuapp.com';

export default {
    URL_BACKEND
};