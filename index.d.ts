/**
Returns a pretty output of the original, minified, gzipped size of a string or buffer.

@param max - Original string or its size in bytes.
@param min - Minified string or its size in bytes.
@param useGzip - Show gzipped size of `min`. Defaults to false. Pretty slow. Not shown when `min` is a `number`.

@example
```
import maxmin from 'maxmin';

const max = 'function smoothRangeRandom(min,max){var num=Math.floor(Math.random()*(max-min+1)+min);return this.prev=num===this.prev?++num:num};';

const min = '(function(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.a=a===this.a?++a:a})()';

console.log(maxmin(max, min, true));
//=> '130 B → 91 B → 53 B (gzip)'
```
*/
export default function maxmin(max: string | Buffer | number, min: string | Buffer | number, useGzip?: boolean): string;
