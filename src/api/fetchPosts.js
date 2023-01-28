const fetchPosts = async (page, limit) => {
    // optionally write fetching logic here or somewhere else
    const API_URL = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
    try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Wrong Url");
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }
}


export { fetchPosts }
