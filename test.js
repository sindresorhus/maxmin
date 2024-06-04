import test from 'ava';
import stripAnsi from 'strip-ansi';
import maxmin from './index.js';

const max = 'function smoothRangeRandom(min,max){var num=Math.floor(Math.random()*(max-min+1)+min);return this.prev=num===this.prev?++num:num};function smoothRangeRandom(min,max){var num=Math.floor(Math.random()*(max-min+1)+min);return this.prev=num===this.prev?++num:num};function smoothRangeRandom(min,max){var num=Math.floor(Math.random()*(max-min+1)+min);return this.prev=num===this.prev?++num:num};';
const min = 'function smoothRangeRandom(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.prev=a===this.prev?++a:a}function smoothRangeRandom(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.prev=a===this.prev?++a:a}function smoothRangeRandom(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.prev=a===this.prev?++a:a};';

test('strings', t => {
	t.is(stripAnsi(maxmin(max, min)), '390 B → 334 B');
	t.is(stripAnsi(maxmin(max, min, true)), '390 B → 334 B → 121 B (gzip)');
});

test('buffers', t => {
	t.is(stripAnsi(maxmin(Buffer.from(max), Buffer.from(min))), '390 B → 334 B');
	t.is(stripAnsi(maxmin(Buffer.from(max), Buffer.from(min), true)), '390 B → 334 B → 121 B (gzip)');
});

test('integers', t => {
	t.is(stripAnsi(maxmin(max.length, min.length)), '390 B → 334 B');
	t.is(stripAnsi(maxmin(max.length, min.length, true)), '390 B → 334 B');
});
