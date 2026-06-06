import BucleWhileVisitor from './BucleWhileVisitor.js';

class BucleWhileVisitorImpl extends BucleWhileVisitor {
    constructor() {
        super();
        this.memoria = {};
    }

    visitPrograma(ctx) {
        ctx.instrucciones().instruccion().forEach(inst => this.visit(inst));
        return null;
    }

    visitInstruccion(ctx) {
        if (ctx.bucle()) return this.visit(ctx.bucle());
        if (ctx.salida()) return this.visit(ctx.salida());
        return null;
    }

    visitBucle(ctx) {
        const cond = ctx.condicion().getText();
        // condicion solo puede ser "0" o "1"
        while (cond === '1') {
            ctx.instrucciones().instruccion().forEach(inst => this.visit(inst));
            // Si la condición es literal no cambia, proteger contra loop infinito
            break; // condición estática: ejecutar una sola vez si es 1
        }
        return null;
    }

    visitSalida(ctx) {
        // Obtener el texto de la cadena quitando las comillas
        const raw = ctx.cadena().getText();
        const texto = raw.slice(1, -1); // saca las comillas dobles
        console.log(texto);
        return null;
    }
}

export default BucleWhileVisitorImpl;