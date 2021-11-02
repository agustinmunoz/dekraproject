import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy, OnInit {

  
 
  globalLanguage:string;
  emitterText:string='Formulario'
  subjectData:string= "Subject Pruebas"

  mobileQuery: MediaQueryList;

  selected = 'option2';
  name:string='';
   public selectedLang: string;
  public languages: string[]= ["es","en"]

  textoInput;
  deviceSize;
  


  //cadenaBusqueda;

 // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

/*  fillerNav=[

  {name:"home",route:"/home",icon:""},
  {name:"formulario",route:"/freactivo",icon:""},
  {name:"paypalnxg",route:"paypalngx",icon:""},
  {name:"micuenta",route:"micuenta",icon:""},
  {name:"login",route:"login",icon:""},
  {name:"logout",route:"logout",icon:""}






 ] */
/* 
  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`); */

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,  
    
    private router:Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
 ;

    
  }

  ngOnInit(){

    
   // this.globalLanguage='es';




    this.getDeviceSize();
    //this.isMobile = this.getIsMobile();
    window.onresize = () => {
     // this.isMobile = this.getDeviceSize();
     this.getDeviceSize();
    };
 
   }



   getDeviceSize() {
    const w = document.documentElement.clientWidth;
     
     console.log(w)
      /*const breakpoint = 992;
      console.log(w);
      if (w < breakpoint) {
        return true;
      } else {
        return false;
      }*/
  if(w<576){
    this.deviceSize="mobile"
  } else if (w>=576 && w<768) {
    this.deviceSize="sm"
  
  }
  else if (w>=768 && w<992) {
    this.deviceSize="md"
  
  }
  else if (w>=992 && w<1200) {
    this.deviceSize="lg"
  
  }
  else if (w>=1200) {
    this.deviceSize="xl"
  
  } else {
    this.deviceSize="undefined"
  }
  
  
  console.log(this.deviceSize)
    }

   
   borrarscroll(){

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




  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true


  




 /* iniciarBusqueda(cadena){

    console.log(cadena)
    this.router.navigate(['/search/'+cadena])
   
    

  }*/
 

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */