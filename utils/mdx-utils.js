import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts?select=*'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    // buscar um post especifico

    const {data} = await api.get(`/posts?id=eq.${id}`);

    if(data){
        return data;
    }

    return []
}