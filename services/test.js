// write a func to retrieve a blob of json
//make an ajax to request! Use the 'fetch' func
//http://rallycoding.herokuapp.com/api/music_albums

//function fetchAlbums() {
//  fetch('http://rallycoding.herokuapp.com/api/music_albums')
//    .then(res => res.json())
//    .then(json => console.log(json));
//}

async function fetchAlbums() {
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log(json);
}

fetchAlbums();
