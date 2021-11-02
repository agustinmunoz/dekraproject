import { CryptService } from 'src/app/services/crypt.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgControlStatus } from '@angular/forms';
//import { LoginService } from 'src/app/services/usuarios/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/services/usuarios/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alerta:string="info";


 // username='martininegro@terra.es'
 // password='conhielo'
  invalidLogin=false
  //isLoged=false;
  errorMessage = 'Invalid Credentials'
  forma:FormGroup;

  authenticationUser
  nombreUser



  constructor(public usuarioService: LoginService,
   // private cartItemsService: CartitemsService,
    private fb:FormBuilder,private router: Router,
    private crypt:CryptService) { 

    this.crearFormulario();
  }

  ngOnInit(): void {

   
   
  }



  crearFormulario(){

    this.forma=this.fb.group({
     // email:['',[Validators.required, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}')] ],/* Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}') */
     email:['',Validators.required],//, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}')] ],/* Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}') 
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

//2, i, u, 3, O, m, +, f, T, o, U, 3, Y, h, L, G, F, D, 5, u, s, g, =, =
    let encriptado = this.crypt.encrypt('conhielo')
  //  this.cartItemsService.addItems();
    console.log("encriptado"+ encriptado)
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
    // console.log(this.forma.value)
   
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




 //Si tiene productos en el carrito y está logueado, lo mandamos a envio

 
console.log(data)







 
  


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
