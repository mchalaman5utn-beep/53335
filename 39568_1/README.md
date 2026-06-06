# BucleWhile Analyzer

Analizador léxico, sintáctico, intérprete y traductor de sentencias `while` escritas en un lenguaje simplificado, implementado con **ANTLR4** y **JavaScript (Node.js)**.

---

## Descripción

Este proyecto implementa un analizador completo para bucles `while` con la siguiente funcionalidad:

- **Análisis léxico**: detecta tokens y reporta caracteres no reconocidos
- **Análisis sintáctico**: valida la estructura del código y reporta errores
- **Árbol de derivación**: genera el árbol sintáctico del programa
- **Tabla de tokens**: muestra todos los lexemas encontrados con tipo, valor, línea y columna
- **Traducción a JavaScript**: convierte el código fuente a JavaScript equivalente
- **Ejecución/Interpretación**: ejecuta el programa e imprime la salida en consola

---

## Estructura del Proyecto

```
39568_1/
├── input_ejemplos/              # Archivos de ejemplo para probar el analizador
│   ├── inputcorrecto1
│   ├── inputcorrecto2
│   ├── inputincorrecto1
│   └── inputincorrecto2
├── node_modules/                # Dependencias instaladas por npm (no editar)
│   └── antlr4/
├── antlr-4.13.2-complete.jar    # Herramienta ANTLR4 para regenerar la gramática
├── BucleWhile.g4                # Gramática ANTLR4
├── BucleWhile.interp            # Archivo generado por ANTLR4
├── BucleWhile.tokens            # Archivo generado por ANTLR4
├── BucleWhileLexer.interp       # Archivo generado por ANTLR4
├── BucleWhileLexer.js           # Lexer generado por ANTLR4
├── BucleWhileLexer.tokens       # Archivo generado por ANTLR4
├── BucleWhileParser.js          # Parser generado por ANTLR4
├── BucleWhileVisitor.js         # Visitor base generado por ANTLR4
├── BucleWhileVisitorImpl.js     # Visitor intérprete (ejecuta el programa)
├── BucleWhileTranslatorImpl.js  # Visitor traductor (genera código JavaScript)
├── index.js                     # Punto de entrada principal
├── input                        # Archivo con el código fuente a analizar
├── package.json
└── package-lock.json
```

---

## Requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- [Java](https://www.java.com/) (solo para regenerar la gramática)

---

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd 39568_1

# Instalar dependencias
npm install
```

---

## Uso

1. Escribí el código fuente a analizar en el archivo `input`:

```
while (1) {
    printf("hola mundo") ,
}
```

2. Ejecutá el analizador:

```bash
npm start
```

---

## Sintaxis Soportada

El lenguaje acepta uno o más bucles `while` anidables con la siguiente estructura:

```
while (<condicion>) {
    printf("<cadena>") ,
    ...
}
```

### Condiciones válidas
| Valor | Significado        |
|-------|--------------------|
| `0`   | Falso (no ejecuta) |
| `1`   | Verdadero (ejecuta)|

### Cadenas
Las cadenas van entre comillas dobles y pueden contener letras (`a-z`, `A-Z`), dígitos (`0-9`), espacios y los símbolos `. , ! ? : ;`

---

## Ejemplos

### Código válido — `while` simple

```
while (1) {
    printf("hola mundo") ,
}
```

**Salida en consola:**
```
═══════════════════════════════════════════════════
  ANÁLISIS DEL CÓDIGO FUENTE
═══════════════════════════════════════════════════
✅ EL CÓDIGO ES CORRECTO
   No se encontraron errores léxicos ni sintácticos.
═══════════════════════════════════════════════════

--- Tabla de Tokens ---
─────────────────────────────────────────────────────────────────
  #  │ Tipo (nombre)         │ Valor            │ Línea │ Columna
─────────────────────────────────────────────────────────────────
  1  │ WHILE                 │ while            │  1    │  0
  2  │ LPAREN                │ (                │  1    │  6
  3  │ UNO                   │ 1                │  1    │  7
  4  │ RPAREN                │ )                │  1    │  8
  5  │ LBRACE                │ {                │  1    │  10
  6  │ PRINTF                │ printf           │  2    │  4
  7  │ LPAREN                │ (                │  2    │  10
  8  │ CADENA_LIT            │ "hola mundo"     │  2    │  11
  9  │ RPAREN                │ )                │  2    │  23
  10 │ COMMA                 │ ,                │  2    │  25
  11 │ RBRACE                │ }                │  3    │  0
  12 │ EOF                   │ <EOF>            │  4    │  0
─────────────────────────────────────────────────────────────────

--- Árbol sintáctico ---
(programa (instrucciones (instruccion (bucle while ( (condicion 1) ) { (instrucciones (instruccion (salida printf ( (cadena "hola mundo") ) ,))) }))) <EOF>)

--- Traducción a JavaScript ---
while (1) {
    console.log("hola mundo");
}

--- Ejecutando programa ---
hola mundo
--- Fin del programa ---
```

### Código válido — `while` anidado

```
while (0) {
    printf("inicio") ,
    while (1) {
        printf("ciclo interno 123") ,
    }
}
```

**Salida en consola:**
```
═══════════════════════════════════════════════════
  ANÁLISIS DEL CÓDIGO FUENTE
═══════════════════════════════════════════════════
✅ EL CÓDIGO ES CORRECTO
   No se encontraron errores léxicos ni sintácticos.
═══════════════════════════════════════════════════

--- Traducción a JavaScript ---
while (0) {
    console.log("inicio");
    while (1) {
        console.log("ciclo interno 123");
    }
}

--- Ejecutando programa ---
--- Fin del programa ---
```

> Como la condición del `while` exterior es `0`, el cuerpo no se ejecuta.

### Código con error léxico

```
while (1) {
    printf("test@mail") ,
}
```

**Salida en consola:**
```
═══════════════════════════════════════════════════
  ANÁLISIS DEL CÓDIGO FUENTE
═══════════════════════════════════════════════════
❌ EL CÓDIGO TIENE 1 ERROR(ES)
   Léxicos:     1
   Sintácticos: 0
═══════════════════════════════════════════════════

🔤 ERRORES LÉXICOS (caracteres no reconocidos):
---------------------------------------------------
   1. Línea 2, columna 15
      → token recognition error at: '@'

⛔ El programa NO se ejecutará por contener errores.
```

### Código con error sintáctico

```
while (2) {
    printf("condicion invalida") ,
}
```

**Salida en consola:**
```
═══════════════════════════════════════════════════
  ANÁLISIS DEL CÓDIGO FUENTE
═══════════════════════════════════════════════════
❌ EL CÓDIGO TIENE 1 ERROR(ES)
   Léxicos:     0
   Sintácticos: 1
═══════════════════════════════════════════════════

📝 ERRORES SINTÁCTICOS (estructura inválida):
---------------------------------------------------
   1. Línea 1, columna 7
      → mismatched input '2' expecting {'0', '1'}

⛔ El programa NO se ejecutará por contener errores.
```

---

## Regenerar la Gramática

Si modificás el archivo `BucleWhile.g4`, regenerá los archivos con:

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor BucleWhile.g4
```

---

## Gramática (resumen)

```antlr
programa      : instrucciones EOF ;
instrucciones : instruccion+ ;
instruccion   : bucle | salida ;
bucle         : WHILE LPAREN condicion RPAREN LBRACE instrucciones RBRACE ;
salida        : PRINTF LPAREN cadena RPAREN COMMA ;
condicion     : '0' | '1' ;
cadena        : CADENA_LIT ;
```
