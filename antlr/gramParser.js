// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var gramListener = require('./gramListener').gramListener;
var grammarFileName = "gram.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001a\u00c0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u00035\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005>\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006H\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tb\n\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\rs\n\r\f\r\u000e\r",
    "v\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0007\u000e~\n\u000e\f\u000e\u000e\u000e\u0081\u000b\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0086\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u008d",
    "\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u0098\n",
    "\u0011\f\u0011\u000e\u0011\u009b\u000b\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00a3\n",
    "\u0012\f\u0012\u000e\u0012\u00a6\u000b\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u00ab\n\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00b2\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u00bc\n\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0002\u0006\u0018\u001a \"\u0017\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*\u0002\u0002",
    "\u0002\u00bd\u0002,\u0003\u0002\u0002\u0002\u00044\u0003\u0002\u0002",
    "\u0002\u00066\u0003\u0002\u0002\u0002\b=\u0003\u0002\u0002\u0002\nG",
    "\u0003\u0002\u0002\u0002\fI\u0003\u0002\u0002\u0002\u000eM\u0003\u0002",
    "\u0002\u0002\u0010a\u0003\u0002\u0002\u0002\u0012c\u0003\u0002\u0002",
    "\u0002\u0014g\u0003\u0002\u0002\u0002\u0016j\u0003\u0002\u0002\u0002",
    "\u0018l\u0003\u0002\u0002\u0002\u001aw\u0003\u0002\u0002\u0002\u001c",
    "\u0085\u0003\u0002\u0002\u0002\u001e\u008c\u0003\u0002\u0002\u0002 ",
    "\u008e\u0003\u0002\u0002\u0002\"\u009c\u0003\u0002\u0002\u0002$\u00aa",
    "\u0003\u0002\u0002\u0002&\u00b1\u0003\u0002\u0002\u0002(\u00bb\u0003",
    "\u0002\u0002\u0002*\u00bd\u0003\u0002\u0002\u0002,-\u0005\u0004\u0003",
    "\u0002-.\u0005\u0012\n\u0002.\u0003\u0003\u0002\u0002\u0002/0\u0005",
    "\u0006\u0004\u000201\u0007\u0003\u0002\u000212\u0005\u0004\u0003\u0002",
    "25\u0003\u0002\u0002\u000235\u0003\u0002\u0002\u00024/\u0003\u0002\u0002",
    "\u000243\u0003\u0002\u0002\u00025\u0005\u0003\u0002\u0002\u000267\u0007",
    "\u000f\u0002\u000278\u0007\u0018\u0002\u00028\u0007\u0003\u0002\u0002",
    "\u00029:\u0005\n\u0006\u0002:;\u0005\b\u0005\u0002;>\u0003\u0002\u0002",
    "\u0002<>\u0003\u0002\u0002\u0002=9\u0003\u0002\u0002\u0002=<\u0003\u0002",
    "\u0002\u0002>\t\u0003\u0002\u0002\u0002?H\u0005\u0010\t\u0002@H\u0005",
    "\u000e\b\u0002AB\u0005\u0014\u000b\u0002BC\u0007\u0003\u0002\u0002C",
    "H\u0003\u0002\u0002\u0002DE\u0005\f\u0007\u0002EF\u0007\u0003\u0002",
    "\u0002FH\u0003\u0002\u0002\u0002G?\u0003\u0002\u0002\u0002G@\u0003\u0002",
    "\u0002\u0002GA\u0003\u0002\u0002\u0002GD\u0003\u0002\u0002\u0002H\u000b",
    "\u0003\u0002\u0002\u0002IJ\u0007\u0018\u0002\u0002JK\u0007\u0007\u0002",
    "\u0002KL\u0005\u0016\f\u0002L\r\u0003\u0002\u0002\u0002MN\u0007\u0004",
    "\u0002\u0002NO\u0007\u0005\u0002\u0002OP\u0005\u0016\f\u0002PQ\u0007",
    "\u0006\u0002\u0002QR\u0005\u0012\n\u0002R\u000f\u0003\u0002\u0002\u0002",
    "ST\u0007\b\u0002\u0002TU\u0007\u0005\u0002\u0002UV\u0005\u0016\f\u0002",
    "VW\u0007\u0006\u0002\u0002WX\u0005\u0012\n\u0002Xb\u0003\u0002\u0002",
    "\u0002YZ\u0007\b\u0002\u0002Z[\u0007\u0005\u0002\u0002[\\\u0005\u0016",
    "\f\u0002\\]\u0007\u0006\u0002\u0002]^\u0005\u0012\n\u0002^_\u0007\t",
    "\u0002\u0002_`\u0005\u0012\n\u0002`b\u0003\u0002\u0002\u0002aS\u0003",
    "\u0002\u0002\u0002aY\u0003\u0002\u0002\u0002b\u0011\u0003\u0002\u0002",
    "\u0002cd\u0007\u000b\u0002\u0002de\u0005\b\u0005\u0002ef\u0007\f\u0002",
    "\u0002f\u0013\u0003\u0002\u0002\u0002gh\u0007\n\u0002\u0002hi\u0005",
    "\u0016\f\u0002i\u0015\u0003\u0002\u0002\u0002jk\u0005\u0018\r\u0002",
    "k\u0017\u0003\u0002\u0002\u0002lm\b\r\u0001\u0002mn\u0005\u001a\u000e",
    "\u0002nt\u0003\u0002\u0002\u0002op\f\u0004\u0002\u0002pq\u0007\u0010",
    "\u0002\u0002qs\u0005\u001a\u000e\u0002ro\u0003\u0002\u0002\u0002sv\u0003",
    "\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002",
    "u\u0019\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wx\b\u000e",
    "\u0001\u0002xy\u0005\u001c\u000f\u0002y\u007f\u0003\u0002\u0002\u0002",
    "z{\f\u0004\u0002\u0002{|\u0007\u0011\u0002\u0002|~\u0005\u001c\u000f",
    "\u0002}z\u0003\u0002\u0002\u0002~\u0081\u0003\u0002\u0002\u0002\u007f",
    "}\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080",
    "\u001b\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0082",
    "\u0083\u0007\u0012\u0002\u0002\u0083\u0086\u0005\u001c\u000f\u0002\u0084",
    "\u0086\u0005\u001e\u0010\u0002\u0085\u0082\u0003\u0002\u0002\u0002\u0085",
    "\u0084\u0003\u0002\u0002\u0002\u0086\u001d\u0003\u0002\u0002\u0002\u0087",
    "\u0088\u0005 \u0011\u0002\u0088\u0089\u0007\u0013\u0002\u0002\u0089",
    "\u008a\u0005 \u0011\u0002\u008a\u008d\u0003\u0002\u0002\u0002\u008b",
    "\u008d\u0005 \u0011\u0002\u008c\u0087\u0003\u0002\u0002\u0002\u008c",
    "\u008b\u0003\u0002\u0002\u0002\u008d\u001f\u0003\u0002\u0002\u0002\u008e",
    "\u008f\b\u0011\u0001\u0002\u008f\u0090\u0005\"\u0012\u0002\u0090\u0099",
    "\u0003\u0002\u0002\u0002\u0091\u0092\f\u0005\u0002\u0002\u0092\u0093",
    "\u0007\u0014\u0002\u0002\u0093\u0098\u0005\"\u0012\u0002\u0094\u0095",
    "\f\u0004\u0002\u0002\u0095\u0096\u0007\u0016\u0002\u0002\u0096\u0098",
    "\u0005\"\u0012\u0002\u0097\u0091\u0003\u0002\u0002\u0002\u0097\u0094",
    "\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002\u0002\u0002\u0099\u0097",
    "\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a!",
    "\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009c\u009d",
    "\b\u0012\u0001\u0002\u009d\u009e\u0005$\u0013\u0002\u009e\u00a4\u0003",
    "\u0002\u0002\u0002\u009f\u00a0\f\u0004\u0002\u0002\u00a0\u00a1\u0007",
    "\u0015\u0002\u0002\u00a1\u00a3\u0005$\u0013\u0002\u00a2\u009f\u0003",
    "\u0002\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003",
    "\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5#\u0003",
    "\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7\u00a8\u0007",
    "\u0016\u0002\u0002\u00a8\u00ab\u0005$\u0013\u0002\u00a9\u00ab\u0005",
    "&\u0014\u0002\u00aa\u00a7\u0003\u0002\u0002\u0002\u00aa\u00a9\u0003",
    "\u0002\u0002\u0002\u00ab%\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007",
    "\u0005\u0002\u0002\u00ad\u00ae\u0007\u000f\u0002\u0002\u00ae\u00af\u0007",
    "\u0006\u0002\u0002\u00af\u00b2\u0005&\u0014\u0002\u00b0\u00b2\u0005",
    "(\u0015\u0002\u00b1\u00ac\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003",
    "\u0002\u0002\u0002\u00b2\'\u0003\u0002\u0002\u0002\u00b3\u00bc\u0007",
    "\r\u0002\u0002\u00b4\u00bc\u0007\u000e\u0002\u0002\u00b5\u00bc\u0007",
    "\u0017\u0002\u0002\u00b6\u00b7\u0007\u0005\u0002\u0002\u00b7\u00b8\u0005",
    "\u0016\f\u0002\u00b8\u00b9\u0007\u0006\u0002\u0002\u00b9\u00bc\u0003",
    "\u0002\u0002\u0002\u00ba\u00bc\u0007\u0018\u0002\u0002\u00bb\u00b3\u0003",
    "\u0002\u0002\u0002\u00bb\u00b4\u0003\u0002\u0002\u0002\u00bb\u00b5\u0003",
    "\u0002\u0002\u0002\u00bb\u00b6\u0003\u0002\u0002\u0002\u00bb\u00ba\u0003",
    "\u0002\u0002\u0002\u00bc)\u0003\u0002\u0002\u0002\u00bd\u00be\u0003",
    "\u0002\u0002\u0002\u00be+\u0003\u0002\u0002\u0002\u00104=Gat\u007f\u0085",
    "\u008c\u0097\u0099\u00a4\u00aa\u00b1\u00bb"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'while'", null, null, null, "'if'", "'else'", 
                     "'return'", null, null, null, null, null, "'or'", "'and'", 
                     "'not'" ];

var symbolicNames = [ null, "SEMI", "WHILE", "LP", "RP", "EQ", "IF", "ELSE", 
                      "RETURN", "LBR", "RBR", "NUM", "FPNUM", "TYPE", "OR", 
                      "AND", "NOT", "RELOP", "PLUS", "MULOP", "MINUS", "STRING_CONSTANT", 
                      "ID", "WHITESPACE", "COMMENT" ];

var ruleNames =  [ "program", "var_decl_list", "var_decl", "stmts", "stmt", 
                   "assign", "loop", "cond", "braceblock", "return_stmt", 
                   "expr", "orexp", "andexp", "notexp", "rel", "sum", "term", 
                   "neg", "typecast", "factor", "lambda" ];

function gramParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

gramParser.prototype = Object.create(antlr4.Parser.prototype);
gramParser.prototype.constructor = gramParser;

Object.defineProperty(gramParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

gramParser.EOF = antlr4.Token.EOF;
gramParser.SEMI = 1;
gramParser.WHILE = 2;
gramParser.LP = 3;
gramParser.RP = 4;
gramParser.EQ = 5;
gramParser.IF = 6;
gramParser.ELSE = 7;
gramParser.RETURN = 8;
gramParser.LBR = 9;
gramParser.RBR = 10;
gramParser.NUM = 11;
gramParser.FPNUM = 12;
gramParser.TYPE = 13;
gramParser.OR = 14;
gramParser.AND = 15;
gramParser.NOT = 16;
gramParser.RELOP = 17;
gramParser.PLUS = 18;
gramParser.MULOP = 19;
gramParser.MINUS = 20;
gramParser.STRING_CONSTANT = 21;
gramParser.ID = 22;
gramParser.WHITESPACE = 23;
gramParser.COMMENT = 24;

gramParser.RULE_program = 0;
gramParser.RULE_var_decl_list = 1;
gramParser.RULE_var_decl = 2;
gramParser.RULE_stmts = 3;
gramParser.RULE_stmt = 4;
gramParser.RULE_assign = 5;
gramParser.RULE_loop = 6;
gramParser.RULE_cond = 7;
gramParser.RULE_braceblock = 8;
gramParser.RULE_return_stmt = 9;
gramParser.RULE_expr = 10;
gramParser.RULE_orexp = 11;
gramParser.RULE_andexp = 12;
gramParser.RULE_notexp = 13;
gramParser.RULE_rel = 14;
gramParser.RULE_sum = 15;
gramParser.RULE_term = 16;
gramParser.RULE_neg = 17;
gramParser.RULE_typecast = 18;
gramParser.RULE_factor = 19;
gramParser.RULE_lambda = 20;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.var_decl_list = function() {
    return this.getTypedRuleContext(Var_decl_listContext,0);
};

ProgramContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitProgram(this);
	}
};




gramParser.ProgramContext = ProgramContext;

gramParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, gramParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.var_decl_list();
        this.state = 43;
        this.braceblock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Var_decl_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_var_decl_list;
    return this;
}

Var_decl_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_decl_listContext.prototype.constructor = Var_decl_listContext;

Var_decl_listContext.prototype.var_decl = function() {
    return this.getTypedRuleContext(Var_declContext,0);
};

Var_decl_listContext.prototype.SEMI = function() {
    return this.getToken(gramParser.SEMI, 0);
};

Var_decl_listContext.prototype.var_decl_list = function() {
    return this.getTypedRuleContext(Var_decl_listContext,0);
};

Var_decl_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterVar_decl_list(this);
	}
};

Var_decl_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitVar_decl_list(this);
	}
};




gramParser.Var_decl_listContext = Var_decl_listContext;

gramParser.prototype.var_decl_list = function() {

    var localctx = new Var_decl_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, gramParser.RULE_var_decl_list);
    try {
        this.state = 50;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.TYPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 45;
            this.var_decl();
            this.state = 46;
            this.match(gramParser.SEMI);
            this.state = 47;
            this.var_decl_list();
            break;
        case gramParser.LBR:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Var_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_var_decl;
    return this;
}

Var_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_declContext.prototype.constructor = Var_declContext;

Var_declContext.prototype.TYPE = function() {
    return this.getToken(gramParser.TYPE, 0);
};

Var_declContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

Var_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterVar_decl(this);
	}
};

Var_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitVar_decl(this);
	}
};




gramParser.Var_declContext = Var_declContext;

gramParser.prototype.var_decl = function() {

    var localctx = new Var_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, gramParser.RULE_var_decl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(gramParser.TYPE);
        this.state = 53;
        this.match(gramParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_stmts;
    return this;
}

StmtsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtsContext.prototype.constructor = StmtsContext;

StmtsContext.prototype.stmt = function() {
    return this.getTypedRuleContext(StmtContext,0);
};

StmtsContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

StmtsContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterStmts(this);
	}
};

StmtsContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitStmts(this);
	}
};




gramParser.StmtsContext = StmtsContext;

gramParser.prototype.stmts = function() {

    var localctx = new StmtsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, gramParser.RULE_stmts);
    try {
        this.state = 59;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.WHILE:
        case gramParser.IF:
        case gramParser.RETURN:
        case gramParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            this.stmt();
            this.state = 56;
            this.stmts();
            break;
        case gramParser.RBR:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.cond = function() {
    return this.getTypedRuleContext(CondContext,0);
};

StmtContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StmtContext.prototype.return_stmt = function() {
    return this.getTypedRuleContext(Return_stmtContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(gramParser.SEMI, 0);
};

StmtContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitStmt(this);
	}
};




gramParser.StmtContext = StmtContext;

gramParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, gramParser.RULE_stmt);
    try {
        this.state = 69;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            this.cond();
            break;
        case gramParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 62;
            this.loop();
            break;
        case gramParser.RETURN:
            this.enterOuterAlt(localctx, 3);
            this.state = 63;
            this.return_stmt();
            this.state = 64;
            this.match(gramParser.SEMI);
            break;
        case gramParser.ID:
            this.enterOuterAlt(localctx, 4);
            this.state = 66;
            this.assign();
            this.state = 67;
            this.match(gramParser.SEMI);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

AssignContext.prototype.EQ = function() {
    return this.getToken(gramParser.EQ, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitAssign(this);
	}
};




gramParser.AssignContext = AssignContext;

gramParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, gramParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(gramParser.ID);
        this.state = 72;
        this.match(gramParser.EQ);
        this.state = 73;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.WHILE = function() {
    return this.getToken(gramParser.WHILE, 0);
};

LoopContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

LoopContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LoopContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

LoopContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitLoop(this);
	}
};




gramParser.LoopContext = LoopContext;

gramParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, gramParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(gramParser.WHILE);
        this.state = 76;
        this.match(gramParser.LP);
        this.state = 77;
        this.expr();
        this.state = 78;
        this.match(gramParser.RP);
        this.state = 79;
        this.braceblock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_cond;
    return this;
}

CondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondContext.prototype.constructor = CondContext;

CondContext.prototype.IF = function() {
    return this.getToken(gramParser.IF, 0);
};

CondContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

CondContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CondContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

CondContext.prototype.braceblock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BraceblockContext);
    } else {
        return this.getTypedRuleContext(BraceblockContext,i);
    }
};

CondContext.prototype.ELSE = function() {
    return this.getToken(gramParser.ELSE, 0);
};

CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitCond(this);
	}
};




gramParser.CondContext = CondContext;

gramParser.prototype.cond = function() {

    var localctx = new CondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, gramParser.RULE_cond);
    try {
        this.state = 95;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.match(gramParser.IF);
            this.state = 82;
            this.match(gramParser.LP);
            this.state = 83;
            this.expr();
            this.state = 84;
            this.match(gramParser.RP);
            this.state = 85;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 87;
            this.match(gramParser.IF);
            this.state = 88;
            this.match(gramParser.LP);
            this.state = 89;
            this.expr();
            this.state = 90;
            this.match(gramParser.RP);
            this.state = 91;
            this.braceblock();
            this.state = 92;
            this.match(gramParser.ELSE);
            this.state = 93;
            this.braceblock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BraceblockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_braceblock;
    return this;
}

BraceblockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceblockContext.prototype.constructor = BraceblockContext;

BraceblockContext.prototype.LBR = function() {
    return this.getToken(gramParser.LBR, 0);
};

BraceblockContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

BraceblockContext.prototype.RBR = function() {
    return this.getToken(gramParser.RBR, 0);
};

BraceblockContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterBraceblock(this);
	}
};

BraceblockContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitBraceblock(this);
	}
};




gramParser.BraceblockContext = BraceblockContext;

gramParser.prototype.braceblock = function() {

    var localctx = new BraceblockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, gramParser.RULE_braceblock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(gramParser.LBR);
        this.state = 98;
        this.stmts();
        this.state = 99;
        this.match(gramParser.RBR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Return_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_return_stmt;
    return this;
}

Return_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_stmtContext.prototype.constructor = Return_stmtContext;

Return_stmtContext.prototype.RETURN = function() {
    return this.getToken(gramParser.RETURN, 0);
};

Return_stmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Return_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterReturn_stmt(this);
	}
};

Return_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitReturn_stmt(this);
	}
};




gramParser.Return_stmtContext = Return_stmtContext;

gramParser.prototype.return_stmt = function() {

    var localctx = new Return_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, gramParser.RULE_return_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.match(gramParser.RETURN);
        this.state = 102;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitExpr(this);
	}
};




gramParser.ExprContext = ExprContext;

gramParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, gramParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.orexp(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_orexp;
    return this;
}

OrexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrexpContext.prototype.constructor = OrexpContext;

OrexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

OrexpContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

OrexpContext.prototype.OR = function() {
    return this.getToken(gramParser.OR, 0);
};

OrexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterOrexp(this);
	}
};

OrexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitOrexp(this);
	}
};



gramParser.prototype.orexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new OrexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 22;
    this.enterRecursionRule(localctx, 22, gramParser.RULE_orexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.andexp(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 114;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OrexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_orexp);
                this.state = 109;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 110;
                this.match(gramParser.OR);
                this.state = 111;
                this.andexp(0); 
            }
            this.state = 116;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AndexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_andexp;
    return this;
}

AndexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndexpContext.prototype.constructor = AndexpContext;

AndexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

AndexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

AndexpContext.prototype.AND = function() {
    return this.getToken(gramParser.AND, 0);
};

AndexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterAndexp(this);
	}
};

AndexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitAndexp(this);
	}
};



gramParser.prototype.andexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AndexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, gramParser.RULE_andexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.notexp();
        this._ctx.stop = this._input.LT(-1);
        this.state = 125;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AndexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_andexp);
                this.state = 120;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 121;
                this.match(gramParser.AND);
                this.state = 122;
                this.notexp(); 
            }
            this.state = 127;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NotexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_notexp;
    return this;
}

NotexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotexpContext.prototype.constructor = NotexpContext;

NotexpContext.prototype.NOT = function() {
    return this.getToken(gramParser.NOT, 0);
};

NotexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

NotexpContext.prototype.rel = function() {
    return this.getTypedRuleContext(RelContext,0);
};

NotexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterNotexp(this);
	}
};

NotexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitNotexp(this);
	}
};




gramParser.NotexpContext = NotexpContext;

gramParser.prototype.notexp = function() {

    var localctx = new NotexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, gramParser.RULE_notexp);
    try {
        this.state = 131;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 128;
            this.match(gramParser.NOT);
            this.state = 129;
            this.notexp();
            break;
        case gramParser.LP:
        case gramParser.NUM:
        case gramParser.FPNUM:
        case gramParser.MINUS:
        case gramParser.STRING_CONSTANT:
        case gramParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 130;
            this.rel();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_rel;
    return this;
}

RelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelContext.prototype.constructor = RelContext;

RelContext.prototype.sum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SumContext);
    } else {
        return this.getTypedRuleContext(SumContext,i);
    }
};

RelContext.prototype.RELOP = function() {
    return this.getToken(gramParser.RELOP, 0);
};

RelContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterRel(this);
	}
};

RelContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitRel(this);
	}
};




gramParser.RelContext = RelContext;

gramParser.prototype.rel = function() {

    var localctx = new RelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, gramParser.RULE_rel);
    try {
        this.state = 138;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.sum(0);
            this.state = 134;
            this.match(gramParser.RELOP);
            this.state = 135;
            this.sum(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 137;
            this.sum(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_sum;
    return this;
}

SumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SumContext.prototype.constructor = SumContext;

SumContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

SumContext.prototype.sum = function() {
    return this.getTypedRuleContext(SumContext,0);
};

SumContext.prototype.PLUS = function() {
    return this.getToken(gramParser.PLUS, 0);
};

SumContext.prototype.MINUS = function() {
    return this.getToken(gramParser.MINUS, 0);
};

SumContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterSum(this);
	}
};

SumContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitSum(this);
	}
};



gramParser.prototype.sum = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SumContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 30;
    this.enterRecursionRule(localctx, 30, gramParser.RULE_sum, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 151;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 149;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_sum);
                    this.state = 143;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 144;
                    this.match(gramParser.PLUS);
                    this.state = 145;
                    this.term(0);
                    break;

                case 2:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_sum);
                    this.state = 146;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 147;
                    this.match(gramParser.MINUS);
                    this.state = 148;
                    this.term(0);
                    break;

                } 
            }
            this.state = 153;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.MULOP = function() {
    return this.getToken(gramParser.MULOP, 0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitTerm(this);
	}
};



gramParser.prototype.term = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TermContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 32;
    this.enterRecursionRule(localctx, 32, gramParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.neg();
        this._ctx.stop = this._input.LT(-1);
        this.state = 162;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TermContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_term);
                this.state = 157;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 158;
                this.match(gramParser.MULOP);
                this.state = 159;
                this.neg(); 
            }
            this.state = 164;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_neg;
    return this;
}

NegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegContext.prototype.constructor = NegContext;

NegContext.prototype.MINUS = function() {
    return this.getToken(gramParser.MINUS, 0);
};

NegContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

NegContext.prototype.typecast = function() {
    return this.getTypedRuleContext(TypecastContext,0);
};

NegContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterNeg(this);
	}
};

NegContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitNeg(this);
	}
};




gramParser.NegContext = NegContext;

gramParser.prototype.neg = function() {

    var localctx = new NegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, gramParser.RULE_neg);
    try {
        this.state = 168;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 165;
            this.match(gramParser.MINUS);
            this.state = 166;
            this.neg();
            break;
        case gramParser.LP:
        case gramParser.NUM:
        case gramParser.FPNUM:
        case gramParser.STRING_CONSTANT:
        case gramParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 167;
            this.typecast();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypecastContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_typecast;
    return this;
}

TypecastContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypecastContext.prototype.constructor = TypecastContext;

TypecastContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

TypecastContext.prototype.TYPE = function() {
    return this.getToken(gramParser.TYPE, 0);
};

TypecastContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

TypecastContext.prototype.typecast = function() {
    return this.getTypedRuleContext(TypecastContext,0);
};

TypecastContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

TypecastContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterTypecast(this);
	}
};

TypecastContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitTypecast(this);
	}
};




gramParser.TypecastContext = TypecastContext;

gramParser.prototype.typecast = function() {

    var localctx = new TypecastContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, gramParser.RULE_typecast);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 170;
            this.match(gramParser.LP);
            this.state = 171;
            this.match(gramParser.TYPE);
            this.state = 172;
            this.match(gramParser.RP);
            this.state = 173;
            this.typecast();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 174;
            this.factor();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.NUM = function() {
    return this.getToken(gramParser.NUM, 0);
};

FactorContext.prototype.FPNUM = function() {
    return this.getToken(gramParser.FPNUM, 0);
};

FactorContext.prototype.STRING_CONSTANT = function() {
    return this.getToken(gramParser.STRING_CONSTANT, 0);
};

FactorContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

FactorContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactorContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

FactorContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitFactor(this);
	}
};




gramParser.FactorContext = FactorContext;

gramParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, gramParser.RULE_factor);
    try {
        this.state = 185;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.NUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 177;
            this.match(gramParser.NUM);
            break;
        case gramParser.FPNUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.match(gramParser.FPNUM);
            break;
        case gramParser.STRING_CONSTANT:
            this.enterOuterAlt(localctx, 3);
            this.state = 179;
            this.match(gramParser.STRING_CONSTANT);
            break;
        case gramParser.LP:
            this.enterOuterAlt(localctx, 4);
            this.state = 180;
            this.match(gramParser.LP);
            this.state = 181;
            this.expr();
            this.state = 182;
            this.match(gramParser.RP);
            break;
        case gramParser.ID:
            this.enterOuterAlt(localctx, 5);
            this.state = 184;
            this.match(gramParser.ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LambdaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_lambda;
    return this;
}

LambdaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LambdaContext.prototype.constructor = LambdaContext;


LambdaContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterLambda(this);
	}
};

LambdaContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitLambda(this);
	}
};




gramParser.LambdaContext = LambdaContext;

gramParser.prototype.lambda = function() {

    var localctx = new LambdaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, gramParser.RULE_lambda);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


gramParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 11:
			return this.orexp_sempred(localctx, predIndex);
	case 12:
			return this.andexp_sempred(localctx, predIndex);
	case 15:
			return this.sum_sempred(localctx, predIndex);
	case 16:
			return this.term_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

gramParser.prototype.orexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.andexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.sum_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.term_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.gramParser = gramParser;
