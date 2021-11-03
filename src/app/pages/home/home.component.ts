import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/usuarios/login.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptService } from 'src/app/services/crypt.service';

import { MicuentaComponent } from 'src/app/components/micuenta/micuenta.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  alerta:string="info";


 // username='martininegro@terra.es'
 // password='conhielo'
  invalidLogin=false
  //isLoged=false;
  errorMessage = 'Invalid Credentials'
  forma:FormGroup;

  authenticationUser
  nombreUser
  datosUser

  constructor(public usuarioService: LoginService,
    // private cartItemsService: CartitemsService,
     private fb:FormBuilder,private router: Router,
     private crypt:CryptService) { 
      this.crearFormulario();

     }

     ngOnInit(): void {

      let key = sessionStorage.getItem('scrollid')
  
      if(key!=null){
       sessionStorage.removeItem('scrollid')
  }
  
  let key2 = sessionStorage.getItem('page')
  
  if(key2!=null){
   sessionStorage.removeItem('page')
  }
  
  
  let key3 = sessionStorage.getItem('searchpage')
  
  if(key3!=null){
   sessionStorage.removeItem('searchpage')
  }
  
  let key4 = sessionStorage.getItem('searchscrollid')
  
  if(key4!=null){
   sessionStorage.removeItem('searchscrollid')
  }
     
    }


    crearFormulario(){

      this.forma=this.fb.group({
        //email:['',[Validators.required, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}')] ],/* Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}') */
        email:['',Validators.required],//, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}')] ],/* Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}') */
        pass:['',Validators.required]//this.usuarioService.validadorPass]],
       /*  nombre:['',Validators.required],
        apellidos:['',Validators.required],
        telefono:['',[Validators.required,Validators.maxLength(9),Validators.minLength(9)]],
        empresa:[''],
        nif:['',Validators.required],
        direccion:['',Validators.required],
        cp:['',Validators.required],
        poblacion:['',Validators.required],
        provincia:['',Validators.required],
        pais:['España',Validators.required],
        copiardireccion:[false],
        direccion2:['',Validators.required],
        cp2:['',Validators.required],
        poblacion2:['',Validators.required],
        provincia2:['',Validators.required]
     */
    
      })
    
    }
  
  
  
    guardar(){
  
    //  this.cartItemsService.addItems();
      
    //  console.log("get items en login")
     // console.log(this.cartItemsService.getItems())
      let controles_form = []
     //console.log(this.forma.controls)
     
     //console.log(this.forma);
     
     
     controles_form =Object.values(this.forma.controls);
     
     console.log(controles_form)
     
     
     if(this.forma.invalid){
     
     Object.values(this.forma.controls).forEach(control => {
       control.markAsTouched();
       
     });
     
     }
     
     
     if(this.forma.valid){
       console.log(this.forma)
     
      this.usuarioService.getUsuarioInfoSWPanel(this.forma.controls.email.value,this.forma.controls.pass.value)
      .subscribe(
    
  
    data=> {
      //console.log("data"),
      //console.log(data['nombre'])
    // this.handleSuccessResponse(data)
    //this.invalidLogin=false;
    //console.log(this.usuarioService.getIsLogged)
    
    this.invalidLogin=false
   // this.router.navigate(['login.html'])
  
  
   sessionStorage.setItem('dataperson',this.crypt.encrypt(JSON.stringify(data)));
   // this.dataperson=data;
    sessionStorage.setItem('authenticationUser',JSON.stringify(data['username']));
   
    
   
   // sessionStorage.setItem('authenticationUser',JSON.stringify( data));
    sessionStorage.setItem('nombre',JSON.stringify( data['name']) );
    sessionStorage.setItem('isLogged', JSON.stringify( 'true') );
   
    this.usuarioService.isLogged=true;
  

  
  // this.router.navigate(['/envio.html'])
  
  
  
  
  
   
    
  
  
    },
  
    error=> {
  
      console.log('hay error'+error);
      this.invalidLogin=true
      
    })
  
      
     
     
  
    }
  }
     
    
     
     getNoValido(parametro){
  
      
      return this.forma.get(parametro).invalid && this.forma.get(parametro).touched
    }
  
   
  
  
    isLogged(){
      
      if(this.usuarioService.getIsLogged()){
       
        this.authenticationUser = JSON.parse(sessionStorage.getItem('authenticationUser'))
        this.nombreUser = JSON.parse(sessionStorage.getItem('nombre'))
        
        
        return true;
  
      } else {
        return false;
      }
  
    }
  
  
    cerrarSesion(){
      sessionStorage.clear();
     // this.router.navigate(['login.html'])
    }
     
     
     
    
  
  
  
  
  
  
  
   /* handleLogAuthentication():any{
    
      this.usuarioService.getUsuarioInfo(this.username,this.password)
      .subscribe(
    
  
    data=> {
      //console.log("data"),
      //console.log(data['nombre'])
    // this.handleSuccessResponse(data)
    //this.invalidLogin=false;
    //console.log(this.usuarioService.getIsLogged)
    
    this.invalidLogin=false
    return data;
  
  
    },
  
    error=> {
  
      console.log('hay error'+error);
      this.invalidLogin=true
      return error;
    }
  
  
      )
     
     // this.usuarioService.getUsuarioInfo(this.username,this.password).subscribe(
  
  
     
  
    }*/
  
  
    handleSuccessResponse(response){
      // console.log(response);
     
     
       
       //Se puede recorrer con for 
       /*for (var i=0;i<this.respuesta.length;i++){
         console.log(this.respuesta[i]._embedded)
       }*/
     
     
     /*for (var i=0;i<response._embedded.usuarios.length;i++){
         console.log(response._embedded.usuarios[i]);
         console.log(response._embedded.usuarios[i].ape1);
       }*/
     
     
     
     // y tambien con for each
     
     
     //  console.log(this.respuesta)
     }
     
     
     handleError(error){
     //  console.log(error + "ha ocurrido un error");
     
     }
  



}
