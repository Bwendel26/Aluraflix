import config from './../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias?_embed=videos`

function getAllWithVideos() {

    return fetch(URL_CATEGORIES)
    .then(async (resp) => {
        if (resp.ok) {
            const resposta = await resp.json();
            return resposta;
        }
        throw new Error('Not possible to get data...');
    });
}

export default {
    getAllWithVideos,
};