// Generated from BucleWhile.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BucleWhileVisitor from './BucleWhileVisitor.js';

const serializedATN = [4,1,11,45,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,1,4,1,19,8,1,11,1,12,1,20,1,2,1,2,3,2,25,8,
2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,
6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,8,9,39,0,14,1,0,0,0,2,18,1,0,0,0,4,24,
1,0,0,0,6,26,1,0,0,0,8,34,1,0,0,0,10,40,1,0,0,0,12,42,1,0,0,0,14,15,3,2,
1,0,15,16,5,0,0,1,16,1,1,0,0,0,17,19,3,4,2,0,18,17,1,0,0,0,19,20,1,0,0,0,
20,18,1,0,0,0,20,21,1,0,0,0,21,3,1,0,0,0,22,25,3,6,3,0,23,25,3,8,4,0,24,
22,1,0,0,0,24,23,1,0,0,0,25,5,1,0,0,0,26,27,5,1,0,0,27,28,5,3,0,0,28,29,
3,10,5,0,29,30,5,4,0,0,30,31,5,5,0,0,31,32,3,2,1,0,32,33,5,6,0,0,33,7,1,
0,0,0,34,35,5,2,0,0,35,36,5,3,0,0,36,37,3,12,6,0,37,38,5,4,0,0,38,39,5,7,
0,0,39,9,1,0,0,0,40,41,7,0,0,0,41,11,1,0,0,0,42,43,5,10,0,0,43,13,1,0,0,
0,2,20,24];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BucleWhileParser extends antlr4.Parser {

    static grammarFileName = "BucleWhile.g4";
    static literalNames = [ null, "'while'", "'printf'", "'('", "')'", "'{'", 
                            "'}'", "','", "'0'", "'1'" ];
    static symbolicNames = [ null, "WHILE", "PRINTF", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "COMMA", "CERO", "UNO", 
                             "CADENA_LIT", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "salida", "condicion", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BucleWhileParser.ruleNames;
        this.literalNames = BucleWhileParser.literalNames;
        this.symbolicNames = BucleWhileParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BucleWhileParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.instrucciones();
	        this.state = 15;
	        this.match(BucleWhileParser.EOF);
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
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BucleWhileParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 17;
	            this.instruccion();
	            this.state = 20; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===2);
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
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BucleWhileParser.RULE_instruccion);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.bucle();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.salida();
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
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BucleWhileParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(BucleWhileParser.WHILE);
	        this.state = 27;
	        this.match(BucleWhileParser.LPAREN);
	        this.state = 28;
	        this.condicion();
	        this.state = 29;
	        this.match(BucleWhileParser.RPAREN);
	        this.state = 30;
	        this.match(BucleWhileParser.LBRACE);
	        this.state = 31;
	        this.instrucciones();
	        this.state = 32;
	        this.match(BucleWhileParser.RBRACE);
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
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BucleWhileParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(BucleWhileParser.PRINTF);
	        this.state = 35;
	        this.match(BucleWhileParser.LPAREN);
	        this.state = 36;
	        this.cadena();
	        this.state = 37;
	        this.match(BucleWhileParser.RPAREN);
	        this.state = 38;
	        this.match(BucleWhileParser.COMMA);
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
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BucleWhileParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BucleWhileParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(BucleWhileParser.CADENA_LIT);
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
	}


}

BucleWhileParser.EOF = antlr4.Token.EOF;
BucleWhileParser.WHILE = 1;
BucleWhileParser.PRINTF = 2;
BucleWhileParser.LPAREN = 3;
BucleWhileParser.RPAREN = 4;
BucleWhileParser.LBRACE = 5;
BucleWhileParser.RBRACE = 6;
BucleWhileParser.COMMA = 7;
BucleWhileParser.CERO = 8;
BucleWhileParser.UNO = 9;
BucleWhileParser.CADENA_LIT = 10;
BucleWhileParser.WS = 11;

BucleWhileParser.RULE_programa = 0;
BucleWhileParser.RULE_instrucciones = 1;
BucleWhileParser.RULE_instruccion = 2;
BucleWhileParser.RULE_bucle = 3;
BucleWhileParser.RULE_salida = 4;
BucleWhileParser.RULE_condicion = 5;
BucleWhileParser.RULE_cadena = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BucleWhileParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(BucleWhileParser.EOF, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BucleWhileVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BucleWhileParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof BucleWhileVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BucleWhileParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof BucleWhileVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BucleWhileParser.RULE_bucle;
    }

	WHILE() {
	    return this.getToken(BucleWhileParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(BucleWhileParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(BucleWhileParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(BucleWhileParser.LBRACE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	RBRACE() {
	    return this.getToken(BucleWhileParser.RBRACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BucleWhileVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BucleWhileParser.RULE_salida;
    }

	PRINTF() {
	    return this.getToken(BucleWhileParser.PRINTF, 0);
	};

	LPAREN() {
	    return this.getToken(BucleWhileParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(BucleWhileParser.RPAREN, 0);
	};

	COMMA() {
	    return this.getToken(BucleWhileParser.COMMA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BucleWhileVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BucleWhileParser.RULE_condicion;
    }

	CERO() {
	    return this.getToken(BucleWhileParser.CERO, 0);
	};

	UNO() {
	    return this.getToken(BucleWhileParser.UNO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BucleWhileVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BucleWhileParser.RULE_cadena;
    }

	CADENA_LIT() {
	    return this.getToken(BucleWhileParser.CADENA_LIT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BucleWhileVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




BucleWhileParser.ProgramaContext = ProgramaContext; 
BucleWhileParser.InstruccionesContext = InstruccionesContext; 
BucleWhileParser.InstruccionContext = InstruccionContext; 
BucleWhileParser.BucleContext = BucleContext; 
BucleWhileParser.SalidaContext = SalidaContext; 
BucleWhileParser.CondicionContext = CondicionContext; 
BucleWhileParser.CadenaContext = CadenaContext; 
