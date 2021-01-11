export const getGifts = async ( category ) => {
    const url =
      `http://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=6&api_key=8O7qSSCXsFZ18g881Y54sOe5Hb7jCuxT`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;
  };