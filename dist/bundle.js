(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var tokenizer_1 = require("./tokenizer");
var markov_1 = require("./markov");
var tokenizer = new tokenizer_1.Tokenizer();
var markov = new markov_1.Markov();
var tokens = tokenizer.tokenize('foo bar quux frotz');
var ngrams = markov.bigrams(tokens);
console.log(ngrams);

},{"./markov":2,"./tokenizer":3}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Markov = function () {
    function Markov() {
        _classCallCheck(this, Markov);
    }

    _createClass(Markov, [{
        key: "bigrams",
        value: function bigrams(tokens) {
            var res = [];
            for (var i = 0; i < tokens.length - 1; i++) {
                var ngram = [tokens[i], tokens[i + 1]];
                res.push(ngram);
            }
            return res;
        }
    }]);

    return Markov;
}();

exports.Markov = Markov;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokenizer = function () {
    function Tokenizer() {
        _classCallCheck(this, Tokenizer);
    }

    _createClass(Tokenizer, [{
        key: "tokenize",
        value: function tokenize(src) {
            var pat = /[\s]/;
            return src.split(pat).filter(function (x) {
                return x.trim() !== '';
            });
        }
    }]);

    return Tokenizer;
}();

exports.Tokenizer = Tokenizer;

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
