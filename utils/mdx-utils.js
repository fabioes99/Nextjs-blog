import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts?select=*'); 

    console.log(data);

    if(data){
        return data;
    }

    return []
}