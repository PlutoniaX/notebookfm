
  

Extract links, ids, durations and names from a youtube playlist


Install
$ npm install --save youtube-playlist
Usage
urls
const ytlist = require('youtube-playlist');
 
const url = 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbnZtkAI3BqcYxKnfWn_C704';
 
ytlist(url, 'url').then(res => {
  console.log(res);
  /* Object
  { data:
   { playlist:
      [ 'https://youtube.com/watch?v=bgU7FeiWKzc',
        'https://youtube.com/watch?v=3PUVr8jFMGg',
        'https://youtube.com/watch?v=3pXVHRT-amw',
        'https://youtube.com/watch?v=KOVc5o5kURE' ] } }
   */
});
 
// or
 
ytlist(url, 'url').then(res => {
  console.log(res.data.playlist);
  /* Array
  [ 'https://youtube.com/watch?v=bgU7FeiWKzc',
  'https://youtube.com/watch?v=3PUVr8jFMGg',
  'https://youtube.com/watch?v=3pXVHRT-amw',
  'https://youtube.com/watch?v=KOVc5o5kURE' ]
   */
});
names
ytlist(url, 'name').then(res => {
  console.log(res);
  /*
  { data:
   { playlist:
      [ 'Singleton Design Pattern - Beau teaches JavaScript',
        'Observer Design Pattern - Beau teaches JavaScript',
        'Module Design Pattern - Beau teaches JavaScript',
        'Mediator Design Pattern - Beau teaches JavaScript' ] } }
   */
});
ids
ytlist(url, 'id').then(res => {
  console.log(res);
  // => { data: { playlist: [ 'bgU7FeiWKzc', '3PUVr8jFMGg', '3pXVHRT-amw', 'KOVc5o5kURE' ] } }
})
durations
ytlist(url, 'duration').then(res => {
  console.log(res);
  // => { data: { playlist: [ 291, 237, 164, 309 ] } }
})
multiple details
ytlist(url).then(res => {
  console.log(res.data);
  // = [{}]
});
 
// or
 
ytlist(url, ['id', 'name', 'url']).then(res => {
  console.log(res.data);
  /* Array
  [ { id: 'bgU7FeiWKzc',
    name: 'Singleton Design Pattern - Beau teaches JavaScript',
    url: 'https://youtube.com/watch?v=bgU7FeiWKzc',
    isPrivate: false },
  { id: '3PUVr8jFMGg',
    name: 'Observer Design Pattern - Beau teaches JavaScript',
    url: 'https://youtube.com/watch?v=3PUVr8jFMGg',
    isPrivate: false },
  { id: '3pXVHRT-amw',
    name: 'Module Design Pattern - Beau teaches JavaScript',
    url: 'https://youtube.com/watch?v=3pXVHRT-amw',
    isPrivate: false },
  { id: 'KOVc5o5kURE',
    name: 'Mediator Design Pattern - Beau teaches JavaScript',
    url: 'https://youtube.com/watch?v=KOVc5o5kURE',
    isPrivate: false } ]
   */
});
Notice: In multiple details - another prop will be added. isPrivate will be true when the video is private (for not loggedin user).

API
ytlist(url, opts)
opts
id : returns only ids of all the videos present in a playlist

url : returns only urls of all the videos present in a playlist

name : return only name of the videos present in a playlist

duration : return only duration (in seconds) of the videos present in a playlist

Passing opts either as url or an array of options ['id', 'name', 'url', 'duration'] returns all the details.

Type of

url : string

opts : string or array

NOTE
This api already supports url-redirection, so you are free to use the shortened url.

For data extraction, you can either choose -

playlist url
url of the content from playlist #1
Related
Pufetch : The best youtube playlist url scrapper and exporter!