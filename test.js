'use strict';
var assert = require('assert');
var chalk = require('chalk');
var maxmin = require('./index');

var max = 'function smoothRangeRandom(min,max){var num=Math.floor(Math.random()*(max-min+1)+min);return this.prev=num===this.prev?++num:num};function smoothRangeRandom(min,max){var num=Math.floor(Math.random()*(max-min+1)+min);return this.prev=num===this.prev?++num:num};function smoothRangeRandom(min,max){var num=Math.floor(Math.random()*(max-min+1)+min);return this.prev=num===this.prev?++num:num};';
var min = 'function smoothRangeRandom(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.prev=a===this.prev?++a:a}function smoothRangeRandom(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.prev=a===this.prev?++a:a}function smoothRangeRandom(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.prev=a===this.prev?++a:a};';

it('should generate correct output', function () {
	assert.strictEqual(chalk.stripColor(maxmin(max, min)), '390 B → 334 B');
	assert.strictEqual(chalk.stripColor(maxmin(max, min, true)), '390 B → 334 B → 120 B (gzip)');
});
