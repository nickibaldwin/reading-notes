# Code 301
## Reading 07: REST

### - [What Google Learned From Its Quest to Build the Perfect Team](https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html) 

### - [SuperAgent](https://visionmedia.github.io/superagent/)

<br/>
<br/>


### Google Article:

I read the Google article in 201. Really interesting read. I can attest to working in a group and performing better myself. Also the amount I learn by working with others at a higher level is great! 

### Super Agent:
"SuperAgent is light-weight progressive ajax API crafted for flexibility, readability, and a low learning curve after being frustrated with many of the existing request APIs. It also works with Node.js!"

``` javacript 
 request
   .post('/api/pet')
   .send({ name: 'Manny', species: 'cat' })
   .set('X-API-Key', 'foobar')
   .set('Accept', 'application/json')
   .then(res => {
      alert('yay got ' + JSON.stringify(res.body));
   });
```

- Initiate a request by invoking the appropriate methods:  request object, then calling .then() (or .end() or await) to send the request. For example a simple GET request:

``` javascript
 request
   .get('/search')
   .then(res => {
      // res.body, res.headers, res.status
   })
   .catch(err => {
      // err.message, err.response
   });

//HTTP method may also be passed as a string
request('GET', '/search').then(success, failure);

//"Old-style callbacks are also supported, but not recommended. Instead of .then() you can call .end():"

request('GET', '/search').end(function(err, res){
  if (res.ok) {}
});
```

There's a lot of examples- see article.