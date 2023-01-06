import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-marketplace-seminar-2.onrender.com/api',
});


//MODEL


export function getAllItems(cat) {
    return api.get('/items')
    .then(({data}) => {
        if (cat === '') {
            console.log(data)
            return data;
        } else {
            return (data.filter((item) => item.category === cat))
        }
    })
};



