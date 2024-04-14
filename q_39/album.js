"use strict";
function make_album(artist, title, tracks) {
    const album = {
        //optional likhne k liye ? use krte hen.
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        //object ko access krne k liye hum "dot use krte hen".
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('Artist 1', 'Album Title 1');
console.log(album1);
const album2 = make_album('Artist 2', 'Album Title 2');
console.log(album2);
const album3 = make_album('Artist 3', 'Album Title 3', 12);
console.log(album3);
