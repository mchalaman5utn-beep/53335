import fs from 'fs';
import antlr4 from 'antlr4';
import BucleWhileLexer from './BucleWhileLexer.js';
import BucleWhileParser from './BucleWhileParser.js';
import BucleWhileVisitorImpl from './BucleWhileVisitorImpl.js';
import BucleWhileTranslatorImpl from './BucleWhileTranslatorImpl.js';

// 1. Leer el archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');

// 2. Crear el stream de caracteres
const chars = new antlr4.InputStream(input);

// 3. Lexer: convierte caracteres en tokens
const lexer = new BucleWhileLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// 4. Parser: construye el árbol sintáctico
const parser = new BucleWhileParser(tokens);
parser.buildParseTrees = true;

// ============ MANEJO DE ERRORES ============
const erroresLexicos = [];
const erroresSintacticos = [];

lexer.removeErrorListeners();
lexer.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
        erroresLexicos.push({ linea: line, columna: column, mensaje: msg });
    }
});

parser.removeErrorListeners();
parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
        erroresSintacticos.push({ linea: line, columna: column, mensaje: msg });
    },
    reportAmbiguity: () => {},
    reportAttemptingFullContext: () => {},
    reportContextSensitivity: () => {}
});

// 5. Construir el árbol
const tree = parser.programa();

// ============ REPORTE DE RESULTADO ============
const totalErrores = erroresLexicos.length + erroresSintacticos.length;

console.log('═══════════════════════════════════════════════════');
console.log('  ANÁLISIS DEL CÓDIGO FUENTE');
console.log('═══════════════════════════════════════════════════');

if (totalErrores === 0) {
    console.log('✅ EL CÓDIGO ES CORRECTO');
    console.log('   No se encontraron errores léxicos ni sintácticos.');
    console.log('═══════════════════════════════════════════════════\n');
} else {
    console.log(`❌ EL CÓDIGO TIENE ${totalErrores} ERROR(ES)`);
    console.log(`   Léxicos:     ${erroresLexicos.length}`);
    console.log(`   Sintácticos: ${erroresSintacticos.length}`);
    console.log('═══════════════════════════════════════════════════\n');

    if (erroresLexicos.length > 0) {
        console.log('🔤 ERRORES LÉXICOS (caracteres no reconocidos):');
        console.log('---------------------------------------------------');
        erroresLexicos.forEach((e, i) => {
            console.log(`   ${i + 1}. Línea ${e.linea}, columna ${e.columna}`);
            console.log(`      → ${e.mensaje}`);
        });
        console.log();
    }

    if (erroresSintacticos.length > 0) {
        console.log('📝 ERRORES SINTÁCTICOS (estructura inválida):');
        console.log('---------------------------------------------------');
        erroresSintacticos.forEach((e, i) => {
            console.log(`   ${i + 1}. Línea ${e.linea}, columna ${e.columna}`);
            console.log(`      → ${e.mensaje}`);
        });
        console.log();
    }

    console.log('⛔ El programa NO se ejecutará por contener errores.');
    process.exit(1);
}

// ============ TABLA DE TOKENS ============
console.log('--- Tabla de Tokens ---');
console.log('─────────────────────────────────────────────────────────────────');
console.log('  #  │ Tipo (nombre)         │ Valor            │ Línea │ Columna');
console.log('─────────────────────────────────────────────────────────────────');

// Llenar el stream para poder leer todos los tokens
tokens.fill();

tokens.tokens.forEach((tok, i) => {
    // Saltar el token EOF si se quiere, o mostrarlo
    const tipoNum = tok.type;
    const nombre  = tipoNum === -1
        ? 'EOF'
        : (parser.symbolicNames[tipoNum] || parser.literalNames[tipoNum] || `TOKEN_${tipoNum}`);
    const valor   = tok.text === '<EOF>' ? '<EOF>' : tok.text;
    const linea   = tok.line;
    const col     = tok.column;

    const numStr    = String(i + 1).padEnd(3);
    const nombreStr = nombre.padEnd(22);
    const valorStr  = valor.padEnd(17);

    console.log(`  ${numStr}│ ${nombreStr}│ ${valorStr}│  ${linea}    │  ${col}`);
});

console.log('─────────────────────────────────────────────────────────────────\n');

// 6. Imprimir el árbol sintáctico
console.log('--- Árbol sintáctico ---');
console.log(tree.toStringTree(parser.ruleNames, parser));
console.log();

// 7. Traducir el programa a JavaScript
console.log('--- Traducción a JavaScript ---');
const translator = new BucleWhileTranslatorImpl();
console.log(translator.visit(tree));
console.log();

// 8. Ejecutar el programa con el visitor intérprete
console.log('--- Ejecutando programa ---');
const visitor = new BucleWhileVisitorImpl();
try {
    visitor.visit(tree);
    console.log('--- Fin del programa ---');
} catch (err) {
    console.log();
    console.error('═══════════════════════════════════════════════════');
    console.error(`⚠️  ERROR EN TIEMPO DE EJECUCIÓN`);
    console.error(`   ${err.message}`);
    console.error('═══════════════════════════════════════════════════');
    process.exit(1);
}