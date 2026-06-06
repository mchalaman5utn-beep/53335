grammar BucleWhile;

// ─── Reglas de parser ───────────────────────────────────────────────

programa
    : instrucciones EOF
    ;

instrucciones
    : instruccion+
    ;

instruccion
    : bucle
    | salida
    ;

bucle
    : WHILE LPAREN condicion RPAREN LBRACE instrucciones RBRACE
    ;

salida
    : PRINTF LPAREN cadena RPAREN COMMA
    ;

condicion
    : CERO
    | UNO
    ;

cadena
    : CADENA_LIT
    ;

// ─── Tokens ─────────────────────────────────────────────────────────

// Palabras clave
WHILE  : 'while'  ;
PRINTF : 'printf' ;

// Símbolos de puntuación / estructura
LPAREN : '('  ;
RPAREN : ')'  ;
LBRACE : '{'  ;
RBRACE : '}'  ;
COMMA  : ','  ;

// Condiciones literales
CERO : '0' ;
UNO  : '1' ;

// Cadena entre comillas dobles: permite letras, dígitos, espacio y símbolos . , ! ? : ;
CADENA_LIT
    : '"' CARACTER* '"'
    ;

// ─── Fragmentos ──────────────────────────────────────────────────────

fragment CARACTER
    : LETRA
    | DIGITO
    | ' '
    | SIMBOLO
    ;

fragment LETRA
    : [a-zA-Z]
    ;

fragment DIGITO
    : [0-9]
    ;

fragment SIMBOLO
    : [.,!?:;]
    ;

// ─── Ignorar espacios en blanco y saltos de línea ───────────────────

WS : [ \t\r\n]+ -> skip ;
