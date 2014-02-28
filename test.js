'use strict';
var assert = require('assert');
var chalk = require('chalk');
var maxmin = require('./index');

var max = 'function smoothRangeRandom(min,max){var num=Math.floor(Math.random()*(max-min+1)+min);return this.prev=num===this.prev?++num:num};';
var min = '(function(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.a=a===this.a?++a:a})()';

it('should generate correct output', function () {
	assert.strictEqual(chalk.stripColor(maxmin(max, min)), '130 B → 91 B');
	assert.strictEqual(chalk.stripColor(maxmin(max, min, true)), '130 B → 91 B → 53 B (gzip)');
});
