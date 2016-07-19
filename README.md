# Bjork

[This is my library, there are many like it, but this one is mine](https://www.youtube.com/watch?v=YoU2hlDJmFE).  
So, yes: Yet another JavaScript implementation of E. Bjorklund's algorithm.  

## Usage

```js
var bjork = require('bjork')
    ,to_ex_dot = function(i){ return i? 'x': '.'; }
    ;

console.log( bjork(3,8) );
console.log( bjork(3,8).map(to_ex_dot).join('') );
```

## Further reading

* [The Theory of Rep-Rate Pattern Generation in the SNS Timing System](https://ics-web.sns.ornl.gov/timing/Rep-Rate%20Tech%20Note.pdf)
* [The Euclidean Algorithm Generates Traditional Musical Rhythms](http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf)

## License

See [LICENSE](LICENSE)
