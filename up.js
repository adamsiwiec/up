#!/usr/bin/env node

var pack = require('./package.json');
var exec = require('node-cmd');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var colors = require('colors');
var homedir = require('homedir');
var async = require('async');
var Spinner = require('cli-spinner').Spinner;



try {
    var updates = require(homedir() + '/up.json');
} catch (err) {
    console.log('⚠️ Please put a up.json file in your home directory!'.red);
    process.exit();
}
if (process.argv.indexOf('--version') !== -1) {
    console.log(pack.version);
    process.exit();
}

console.log('');
console.log('⬆');
console.log('');

if (process.argv.indexOf('--verbose') !== -1) {
    var verbose = true;
}

// async
for (var i = 0; i < updates.async.length; i++) {
    exec(updates.async[i], function(err, data, stderr){

        if (verbose) {
        console.log(data);
    }
    });
    }
