import { Injectable } from '@angular/core';
import * as CriptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  textoEncriptado
  textoDesencriptado;

  constructor() { }




  encrypt(toCrypt){

 console.log("A encruiptar",toCrypt);
    // console.log(CriptoJS.AES.encrypt(JSON.stringify(toCrypt),"agustin").toString());
  
    
    var secret = "ThisIsASecretKey";
  
    this.textoEncriptado=CriptoJS.AES.encrypt(toCrypt,secret).toString();
   // sessionStorage.setItem("card",this.textoEncriptado)
   console.log("encriptado",this.textoEncriptado)
   return this.textoEncriptado;
 




}


decript(toDecrypt){
  //  console.log( this.itemsCarritoService.getItems());
   //  let card_e=sessionStorage.getItem('card');
    this.textoDesencriptado=CriptoJS.AES.decrypt(toDecrypt.trim(),"agustin".trim()).toString(CriptoJS.enc.Utf8);
   // console.log(this.textoDesencriptado)
   // let card_j = JSON.parse(this.textoDesencriptado)
   // console.log(card_j)
   return this.textoDesencriptado;
   }

}
