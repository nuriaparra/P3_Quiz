const figlet =require('figlet');
const chalk =require('chalk');


const colorize  = (mensaje, color) => {//ponecolor

	if (typeof color !=="undefined"){


	  mensajecolor= chalk[color].bold(mensaje);
    }   

	return mensajecolor;
};

const log  = (mensaje, color) => { //imprimeeltexto
	console.log(colorize(mensaje, color));
};

const biglog = (mensaje, color) => {//imprimegrande

 log(figlet.textSync(mensaje, {horizontalLayout: 'full'}), color );
};


exports= module.exports= { //otra manera de hacer el exports
	colorize,
	log,
	biglog
};