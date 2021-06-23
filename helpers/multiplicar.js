const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    
    try {
        let salida, consola = '';    
    
        for (b = 1; b <= hasta; b++) {
            salida += `${base} x ${b} = ${base*b}\n`;
            consola += `${base} ${'x'.green} ${b} ${'='.green} ${base*b}\n`;
        }  
        if (listar) {
            console.log('=================='.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('==================' .green);

            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return(`Tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}