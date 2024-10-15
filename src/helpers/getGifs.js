export const getGifs = async ( category ) => {
    // Debe tener el protocolo
    const url = `https://api.giphy.com/v1/gifs/search?api_key=h1EP0ZSS1VAx3i0n3rkHn2Ur9ypNAmAO&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data = [] } = await resp.json();


    const gifs = data.map(img => ({
        // Estoy retornando un objeto
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url
    }));

    return gifs;
}