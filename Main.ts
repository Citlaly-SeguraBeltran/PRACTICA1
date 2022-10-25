import { Autor } from "./Autor";
import { Copia } from "./Copia";
import { Libro } from "./Libro";
import { Lector } from './Lector';
 

const Citlaly= new Autor ("Citlaly Beltran","Mexicana","4/05/06","pp","tipo","CHITYS",2007);
console.log(Citlaly);

const Beto= new Autor ("Beto Arano","Mexicano","17/05/06","admv","tipo","betos",2005);
console.log(Beto);

const PP = new Libro ("Prietos en Aprietos","divertido","CHITYS",2022);
console.log(PP); 

const cazadores = new Libro ("Cazadores","divertido","CHITYS",2022);
console.log(cazadores);

const Ame = new Lector(23,"America",27373823,"NOse",2433343)
console.log(Ame)

const Yael = new Lector(23,"Yael",27373823,"NOse",2433343)
console.log(Yael)

const cop = new Copia("20/oct/2022");
cop.agregarcopia(7,PP,Ame);

cop.Listacopias();