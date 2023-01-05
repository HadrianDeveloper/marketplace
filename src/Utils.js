import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-marketplace-seminar-2.onrender.com/api',
});


//MODEL


export function getAllItems(cat) {
    return api.get('/items')
    .then(({data}) => {
        if (category) {
            return data.filter((item) => item.category === cat)
        } else {
            data;
        }
    })
};



