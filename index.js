import gzipSize from 'gzip-size';
import prettyBytes from 'pretty-bytes';
import chalk from 'chalk';
import figures from 'figures';

const arrow = ' ' + figures.arrowRight + ' ';

const format = size => chalk.green(prettyBytes(size));

export default function maxmin(max, min, useGzip = false) {
	const maxString = format(typeof max === 'number' ? max : max.length);
	const minString = format(typeof min === 'number' ? min : min.length);
	let returnValue = maxString + arrow + minString;

	if (useGzip && typeof min !== 'number') {
		returnValue += arrow + format(gzipSize.sync(min)) + chalk.gray(' (gzip)');
	}

	return returnValue;
}
