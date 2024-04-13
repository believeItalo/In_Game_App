import axios from 'axios';

const post_api_url = "minha url(preciso ver com o mano pilotagem)"; // defino aqui a url que sera
//utilizada para "chamar" a api

//variável que irá armazenar a função que vai fazer todo o "trabalho" de consumir a api
//utilizamos o export para que a função possa ser exportada e utilizada em qualquer lugar 
export const post_api = {
    //postData é a função responsável por tratar com a api de fato
    //aqui declaramos "data:any" para dizermos que os dados pode ser "any/qualquer"
    //promise<any> refere-se a que a promessa pode ser de qualquer tipo tambem
    //Promise é usado para valores que podem estar disponiveis no momento ou no futuro, ou seja
    //Promise garante que a função esperará a promessa dos dados que virão para a api realizar
    //a requisição
    async postData(data: any): Promise<any> {
        //ao tratar requisições, erros podem acontecer, nesse caso é de extrema importância
        //utilizar o try and catch para tratar possiveis erros de rede, servidor, dados etc..
        //O try and catch é bom, pois garante que o erro sera tratado, sem que a aplicação
        //CRASHE
        try {
            const response = await axios.post(`${post_api_url}/endpoint`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            throw error;
        }
    },

};
