import { Injectable } from '@angular/core';
import {
  Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  sendEmailVerification, signOut, User, sendPasswordResetEmail
} from '@angular/fire/auth';
import { Firestore, collection, collectionData, setDoc, doc } from '@angular/fire/firestore'
import { query, where } from "firebase/firestore";
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Asociado } from '../models/asociado';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  token: any = "";
  username: any = "";
  email: any = "";
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userLogged!: any;

  constructor(private auth: Auth,
    private firestore: Firestore,
    private cookies: CookieService,
    private router: Router,
    private toastr: ToastrService) {
  }


  registrarAsociado(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(response => {
        sendEmailVerification(response.user);
        this.createUserRol(response.user);
      })
      .catch(error => {
        console.log("Error en la creación del usuario:" + error)
      });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified) {
          console.log("Usuario ha iniciado sesion:" + userCredential.user.email);
          this.email = userCredential.user.email;
          userCredential.user.getIdToken().then(
            token => {
              this.token = token;
              this.cookies.set("cookieAuth", this.token);
              this.loggedIn.next(true);
            }
          )
        } else {
          console.log("Correo electrónico no verificado");
        }
      });
  }

  login2(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        this.showError();
        return null;
      })
  }

  login3(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  createCookie(token: any, nombre: any) {
    this.token = token;
    this.username = nombre;
    this.cookies.set("cookieAuth", this.token);
    this.cookies.set("nombreAuth", this.username);
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  logout() {
    return signOut(this.auth)
      .then(response => {
        this.token = "";
        this.cookies.set('cookieAuth', '');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
      });
  }

  isAuthenticated() {
    return this.cookies.get("cookieAuth");
  }

  getUserDetails() {
    return this.username;
  }

  createUserRol(user: User) {
    const dbRef = collection(this.firestore, 'rol');
    setDoc(doc(dbRef), ({ asociado: user.email, rol: 'asociado' }))
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("Error:" + error);
      })
  }

  recoveryPassword(email: string) {
    sendPasswordResetEmail(this.auth, email)
      .then(response => {
        console.log("Correo para reestablecer contraseña enviado")
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error. Código: " + errorCode);
        console.error("Error. Mensaje: " + errorMessage);
      })
  }

  getUserRol(): Observable<Asociado[]> {
    const dbRef = collection(this.firestore, 'rol');
    const q = query(dbRef, where("asociado", "==", this.email));
    return collectionData(q, { idField: 'id' }) as Observable<Asociado[]>;
  }

  // Mensajes

  showSuccess() {
    this.toastr.success('Inicio de sesión correcto', 'Hola!', {
      timeOut: 3000
    });
  }

  showWarn() {
    this.toastr.warning(
      'Verifica tu correo electrónico para poder iniciar sesión',
      'Atención:',
      {
        timeOut: 3000,
      }
    );
  }

  showError() {
    this.toastr.error('Usuario o contraseña inválidos', 'Error:', {
      timeOut: 3000,
    });
  }

}