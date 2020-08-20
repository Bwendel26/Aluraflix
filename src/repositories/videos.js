import config from './../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create() {

    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'aplication/json',
        },
        body: JSON.stringify({})
    })
    .then(async (resp) => {
        if (resp.ok) {
            const resposta = await resp.json();
            return resposta;
        }
        throw new Error('Not possible to register video...');
    });
}

export default {
    create,
};