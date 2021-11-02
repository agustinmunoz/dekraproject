import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { utf8Encode } from '@angular/compiler/src/util';
import { FormControl } from '@angular/forms';
import { CryptService } from '../crypt.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged:boolean=false;
  authenticationUser;
  nombre;
  dataperson;

  constructor(private http: HttpClient,
    private crypt:CryptService) { }


    getUsuarioInfoSWPanel(user, pass):any{


      

      let username='agustinmunoz'
      let password ='2@376Yh98#rtY5'
  
      let basicAutheticationHeaderString='Basic ' + window.btoa(username + ':' + password);

      console.log(basicAutheticationHeaderString)
      let headersForUser = new HttpHeaders({
        'Accept':'*/*',
        'Cache-Control': 'no-cache',
       //'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json',
       'Authorization': basicAutheticationHeaderString,
       'Access-Control-Allow-Origin': '*',
      
      });
      let options = { headers: headersForUser};
    
     // let data ='user='+ user + '&password=' + password;
    
 // let encodePass=this.crypt.encrypt(password)
    
     /* let data = {
          "user":"martininegro@terra.es",
          "password":"conhielo"
    
      }*/
    
    
    /*   const payload = new HttpParams()
    payload.set('user', user)
    payload.set('password', password);*/
    
      
    
    // return "pepe";
    
      return this.http.get('http://81.25.127.229:8907/dekra/user?username='+user+'&password='+pass,
      
      //payload.toString, 
     options
    
    
      )
      .pipe(
    
        map(
    
          data => {
    
    
    
    
    
            console.log("Response UserInfo")
            console.log(data);
            
            //La contraseña se comprueba en back por seguridad
           // if (user === data['login'] && password === data['pass']) {
              if (user === data['login']) {
             // console.log('logueado')
              //data['password']='esta escondida'
              //console.log('data')
              //console.log(data)
              sessionStorage.setItem('dataperson',this.crypt.encrypt(JSON.stringify(data)));
             // this.dataperson=data;
              sessionStorage.setItem('authenticationUser',JSON.stringify( user));
             // sessionStorage.setItem('authenticationUser',JSON.stringify( data));
              sessionStorage.setItem('nombre',JSON.stringify( data['nombre']) );
              sessionStorage.setItem('isLogged', JSON.stringify( 'true') );
    
              this.isLogged=true;
             // this.authenticationUser=user;
             // this.nombre=data['nombre'];
            
             // sessionStorage.setItem('TOKEN',`Bearer ${data['token']}`);
            } else {
              console.log("Bad Credential")
              this.isLogged=false;
             
    
            }
          
           
            return data;
    
          },
    
          error=>{
            console.log('error service')
           // this.isInvalidCredential=true;
            return error;
          }
    
    
        )
    
    
      )
    
    }
    
    // Ya no se usa, Se usaba cuando estaba en dotster
      getUsuarioInfo(user, password):any{
    
    
        let headersForUser = new HttpHeaders({
          'Accept':'*/*',
         // 'Cache-Control': 'no-cache',
         'Content-Type': 'application/x-www-form-urlencoded'
        //  'Content-Type': 'application/json'
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODkzNzQ1MDEsInVzZXJfbmFtZSI6InVzdWFyaW9fYW50b25pbyIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwianRpIjoiYjE0MmFlZGEtYmU2NS00MTVmLWI3M2EtODYyYjhjMWYyMTg5IiwiY2xpZW50X2lkIjoiZnJvbnRhcHAiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.J6LRictXA_4YMYOtotYEqiKRYYNdBPzrkNbWRdLPZGE'
        
        });
        let options = { headers: headersForUser};
    
        let data ='user='+ user + '&password=' + password;
    
    
    
       /* let data = {
            "user":"martininegro@terra.es",
            "password":"conhielo"
    
        }*/
    
    
     /*   const payload = new HttpParams()
      payload.set('user', user)
      payload.set('password', password);*/
     
        
    
     // return "pepe";
    
        return this.http.post('https://dist06u0151.dotster.com/webservice2/regalos/services/todoregalos_service/todoregalos_usuarios.php',
        
        //payload.toString, 
        data, options
    
    
        )
        .pipe(
    
          map(
    
            data => {
    
    
    
    
    
    
            //  console.log(data);
              if (user === data['login'] && password === data['pass']) {
                console.log('logueado')
                //data['password']='esta escondida'
                //console.log('data')
                //console.log(data)
                sessionStorage.setItem('dataperson',this.crypt.encrypt(JSON.stringify(data)));
               // this.dataperson=data;
                sessionStorage.setItem('authenticationUser',JSON.stringify( user));
               // sessionStorage.setItem('authenticationUser',JSON.stringify( data));
                sessionStorage.setItem('nombre',JSON.stringify( data['nombre']) );
                sessionStorage.setItem('isLogged', JSON.stringify( 'true') );
    
                this.isLogged=true;
               // this.authenticationUser=user;
               // this.nombre=data['nombre'];
              
               // sessionStorage.setItem('TOKEN',`Bearer ${data['token']}`);
              } else {
                console.log("Bad Credential")
                this.isLogged=false;
               
    
              }
            
             
              return data;
    
            },
    
            error=>{
              console.log('error service')
             // this.isInvalidCredential=true;
              return error;
            }
    
    
          )
    
    
        )
    
      }
    
    
    
     /* callLoginOauthAuthentication(user, pass) {
    
        let username='frontapp'
        let password ='12345'
    
        let basicAutheticationHeaderString='Basic ' + window.btoa(username + ':' +  password);
        
    
    
    
    
          let headersForTokenAPI = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicAutheticationHeaderString 
          // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODkzNzQ1MDEsInVzZXJfbmFtZSI6InVzdWFyaW9fYW50b25pbyIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwianRpIjoiYjE0MmFlZGEtYmU2NS00MTVmLWI3M2EtODYyYjhjMWYyMTg5IiwiY2xpZW50X2lkIjoiZnJvbnRhcHAiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.J6LRictXA_4YMYOtotYEqiKRYYNdBPzrkNbWRdLPZGE'
          
          });
    
          let data ="grant_type=password&username=usuario_antonio&password=67890";
        let options = { headers: headersForTokenAPI};
    
    
    
    
    
    
    
      
    
    
        // este va bin usuarios 2 return this.http.get('http://localhost:8001/usuarios', options)
    
       // return this.http.get('http://localhost:8765/api/usuarios/usuarios', options)
    
       var headerstoken = new HttpHeaders();
      // headerstoken.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODkzNzYyODYsInVzZXJfbmFtZSI6InVzdWFyaW9fYW50b25pbyIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwianRpIjoiNzgwNGFkOWUtY2JkNC00YjUzLWEwZjYtMDE3ZWExMzMwYmU3IiwiY2xpZW50X2lkIjoiZnJvbnRhcHAiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.BuvojB5ERiMZrDJK_wGkMb8pYWiPUAp3-RvFdY78G3s');
       headerstoken.set('Cache-Control','no-cache')
       headerstoken.set("Access-Control-Allow-Origin", "*");
       //headerstoken.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
       //headerstoken.append('Cookie','JSESSIONID=A999A90CDCF35FC160C160D68A3CAF46')
       headerstoken.set('Content-Type', 'application/x-www-form-urlencoded');
       headerstoken.set('Accept','application/json')
       //let options2 = new RequestOptions({ headers: headers });
    
    
    
       return this.http.post('http://81.25.127.229:8765/api/oauth3/oauth/token',
    
      // return this.http.post('http://localhost:8005/authenticate',
      // return this.http.post('localhost:8765/api/restfull-web-services/authenticate',
    
        data
       , options)
       
    
          .pipe(
    
            map(
    
              data => {
    
                //if (username === data['username'] && password === data['password']) {
                  //data['password']='esta escondida'
                  //console.log('data')
                  //console.log(data)
               //   sessionStorage.setItem('authenticationUser', username);
                 // sessionStorage.setItem('TOKEN',`Bearer ${data['token']}`);
               // }
                // console.log(data['password'])
                return data;
    
              }
    
    
            )
    
    
          )
      }*/
    
    
     
    
    
    
    
      insertUserSWPanel(user){
    
    //console.log("user SWPAnel"+ user)
    
    
        let headersForUser = new HttpHeaders({
          'Accept':'*/*',
          'Access-Control-Allow-Origin':'*',
         // 'Cache-Control': 'no-cache',
        // 'Content-Type': 'application/x-www-form-urlencoded'
          'Content-Type': 'application/json'
        // 'Authorization': 'Bearer N2E1MGZjMDBlYmFkMDc5ODFiMTZkZjg2ZjU2Y2EyZTMyYjVlYjFhYWZkMjQxZTI1ZDJhZmMxYTJmMjMxZTY4Ng'
        
        });
        let options = { headers: headersForUser};
    
    
    
    
        let bb=JSON.stringify(user)
        console.log("user SWPAnel"+ bb)
      
        //No se puede hacer la lllamada directamente a big buy porque da error de Cors
         return this.http.post<any>("https://www.todoregalosoriginales.es:8301/big-buy/adduser",bb,{headers: headersForUser, observe: "response"})
       
       
         //return this.http.post<any>("https://api.bigbuy.eu/rest/shipping/orders",bb,options)
        //  return this.http.post<any>("http://localhost:8301/big-buy/stepproduct/getproductbycustomlist",aa,options)
           .pipe(
         
             map(response=>{
               
               
              
              return response;
              
             },
             
             
             error=>{
              console.log('error service')
             // this.isInvalidCredential=true;
              return error;
            }
             
             
             )
    
             
         
         
           )
         
    
    
    
    
      }
    
    
    
    // No se usa. Antes se usaba cuando la base datos de usuario estaba en dotster en mysql
      insertUser(user){
    
    
    
       /* let usuario_json = {
          email:"juan@trasponerse.es",
          nombre:"Ramón",
          apellidos:"Luca de Tena",
          telefono:"657854133",
          empresa:"PERCO SL",
          nif:"30788785L",
          direccion:"jEl Clavo, 1",
          cp:"14014",
          poblacion:"Córdoba",
          provincia:"Córdoba",
          pais:"España",
          pass:"conhielo",
          direccion2:"El Clavo, 1",
          cp2:"14014",
          poblacion2:"Córdoba",
          provincia2:"Córdoba"
          
        };*/
    
      //  let user= JSON.stringify(usuario_json);
    
      //let data ='login=Córdoba';
    
    
        let headersForUser = new HttpHeaders({
          'Accept':'*/*',
         // 'Cache-Control': 'no-cache',
         'Content-Type': 'application/x-www-form-urlencoded',
         'Accept-Charset':'charset=utf-8',
        //  'Content-Type': 'application/json',
        //  'Access-Control-Allow-Origin':'*'
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODkzNzQ1MDEsInVzZXJfbmFtZSI6InVzdWFyaW9fYW50b25pbyIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwianRpIjoiYjE0MmFlZGEtYmU2NS00MTVmLWI3M2EtODYyYjhjMWYyMTg5IiwiY2xpZW50X2lkIjoiZnJvbnRhcHAiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.J6LRictXA_4YMYOtotYEqiKRYYNdBPzrkNbWRdLPZGE'
        
        });
    
    /*var postObject:any = new Object();
    postObject.login = "testAgent@rerer.es";
    postObject.token = "testAgent2";
    postObject.terminalInfo = "test2";
    postObject.forceLogin = "false";*/
    
      // let headersForUser = new HttpHeaders().set('Content-Type','application/json');
    
    
        let options = { headers: headersForUser};
    
        return this.http.post('https://dist06u0151.dotster.com/webservice2/regalos/services/todoregalos_service/todoregalos_usuarios_insert.php',
       // JSON.parse(user),
      // {login:"juan@trasponersesfdassf.es"},
     // data,
     // usuario_json,
      //JSON.parse(postObject),
     // JSON.stringify(usuario_json),
      user,
       options)/*.subscribe(
    data=> {
    
      console.log(data)
     return data;
    }, error=>{
    
    
      console.log(error)
    }
    
    
    
       )*/
        .pipe(
    
          map(
    
            data => {
    
    
           //   console.log(data);
    
           return data;
        
        
          },
    
          error => {
          //  console.log(error)
    
          return error;
          }
          
          ))
    
        }
        
    
    
    getIsLogged(){
     // return this.isLogged;
    
    if(JSON.parse(sessionStorage.getItem('isLogged'))==='true'){
    
    
      
      return true
    }
    
    return false;
    
    }
    
    
    
    validadorPass (control : FormControl):{[s:string]:boolean}{
    
     // console.log("****************"+control.value)
      
      if(control.value.toLowerCase()!='conhielo'){
        return {
          validadorPass:true
        }
      }
      
      return null;
      
        }
    
    
    getDataPerson(){
    
    console.log(this.dataperson)
      return this.dataperson;
    
    }
    
    
    deleteDataPerson(){
      this.dataperson=null;
    }
    




}
