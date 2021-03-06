// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

	// Moo lexer documention is here:
	// https://github.com/no-context/moo

	const moo = require("moo")
	const lexer = moo.compile({
	  ws:     /[ \t]+/,
	  number: /[0-9]+/,
	  times: /\*|times/,
	  word: /[a-z]+/,
	});
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "main", "symbols": ["trig"]},
    {"name": "main", "symbols": ["multiplication"], "postprocess": ([first]) => first},
    {"name": "multiplication", "symbols": [(lexer.has("number") ? {type: "number"} : number), (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("times") ? {type: "times"} : times), (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("number") ? {type: "number"} : number)], "postprocess": ([first, , , , second]) => first * second},
    {"name": "trig", "symbols": [{"literal":"sin"}, (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("number") ? {type: "number"} : number)], "postprocess": ([, ,third]) => Math.sin(third)}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
