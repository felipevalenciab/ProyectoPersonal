import { Injectable } from '@angular/core';
import { Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut, getAuth, onAuthStateChanged, User, sendPasswordResetEmail} from '@angular/fire/auth';
import { addDoc, collection, setDoc, doc } from '@firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token: string;
  username: string;

  constructor( private auth:Auth,
    private firestore:Firestore ) { 
    this.token="";
    this.username="";
  }

  registrarAsociado(email:string, password:string){
    return createUserWithEmailAndPassword(this.auth, email, password)
    .then(response=>{
      sendEmailVerification(response.user);
      this.createUserRol(response.user);
    })
    .catch(error=>{
      console.log("Error en la creación del usuario:"+error)
    });
  }

  login(email:string, password:string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth)
    .then(response =>{
      this.token="";
    });
  }

  isAuthenticated(){
    return this.token;
  }

  getUserDetails(){
    return this.username;
  }

  createUserRol(user: User){
    const dbRef = collection(this.firestore, 'rol');
    setDoc ( doc (dbRef), ({ asociado:user.email, rol:'asociado' }))
    .then(response =>{
      console.log(response);
    })
    .catch(error =>{
      console.log("Error:"+error);
    })
  }

  recoveryPassword(email:string){
    sendPasswordResetEmail(this.auth,email)
    .then(response => {
      console.log("Correo para reestablecer contraseña enviado")
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error. Código: "+errorCode);
      console.error("Error. Mensaje: "+errorMessage);
    })
  }

  
}