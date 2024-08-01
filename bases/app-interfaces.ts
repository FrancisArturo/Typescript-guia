// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar():void;
}

const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Villano {
  reir?: boolean;
  comer: boolean;
  llorar: boolean;
  Volar?: boolean;
}

const guason: Villano = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Villano ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Ciudad {
  (x:string[]):number;
}

const ciudadGotica:Ciudad = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Datos {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
}

interface Bio {
  imprimirBio(): void;
}

class Persona implements Datos, Bio {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string,
  ){}

  imprimirBio(): void {
    console.log(
      `Nombre: ${this.nombre}. 
Edad: ${this.edad}. 
Sexo: ${this.sexo}. 
Estado Civil: ${this.estadoCivil}.`
    );
  }
}

const john = new Persona('John', 30, 'Masculino', 'Soltero');

john.imprimirBio();
