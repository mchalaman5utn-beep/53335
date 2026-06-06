import BucleWhileVisitor from './BucleWhileVisitor.js';

class BucleWhileTranslatorImpl extends BucleWhileVisitor {
    constructor() {
        super();
        this.indent = 0;
        this.variables = new Set();
    }

    pad() {
        return '    '.repeat(this.indent);
    }

    visitPrograma(ctx) {
        const cuerpo = ctx.instrucciones().instruccion().map(i => this.visit(i)).join('\n');
        const declaraciones = [...this.variables].map(v => `let ${v};`).join('\n');
        return (declaraciones ? declaraciones + '\n' : '') + cuerpo;
    }

    visitInstruccion(ctx) {
        if (ctx.bucle()) return this.visit(ctx.bucle());
        if (ctx.salida()) return this.visit(ctx.salida());
        return '';
    }

    visitBucle(ctx) {
        const cond = ctx.condicion().getText();
        this.indent++;
        const cuerpo = ctx.instrucciones().instruccion().map(i => this.visit(i)).join('\n');
        this.indent--;
        return `${this.pad()}while (${cond}) {\n${cuerpo}\n${this.pad()}}`;
    }

    visitSalida(ctx) {
        const cadena = ctx.cadena().getText();
        return `${this.pad()}console.log(${cadena});`;
    }
}

export default BucleWhileTranslatorImpl;