/**
Returns a pretty output of the original, minified, gzipped size of a string or buffer.

@param max Original string or its size in bytes.
@param min Minified string or its size in bytes.
@param useGzip Show gzipped size of min. Defaults to false. Pretty slow. Not shown when min is a number.
*/
export default function maxmin(max: string | Buffer | number, min: string | Buffer | number, useGzip?: boolean): string;
