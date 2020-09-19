import axios from 'axios';
const getUrl = {
    get: async (url: string) => {
        var args = {
            data: {},
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Credentials": "true",
                'X-Requested-With': 'XMLHttpRequest'
            }
        }

        await axios.get('https://cors-anywhere.herokuapp.com/' + url, args)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                return error;
            })
    }
}
export default getUrl