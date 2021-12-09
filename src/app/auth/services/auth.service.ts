  import { Injectable } from '@angular/core';
  import { User } from '../../../../node_modules/firebase';
  import { AngularFireAuth } from '@angular/fire/compat/auth';
  import { first } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  constructor(public afAuth: AngularFireAuth) {}

  async login(email: string, password:string){
    try{    
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
      console.log(result);
      return result;
      
    }
    catch(error){
      console.log(error)
    }

  }
  async logout(){
    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log(error)
    }

  }
  getCurrentUser(){
    try{
      return this.afAuth.authState.pipe(first()).toPromise();
    }
    catch(error){
      console.log(error)
    }
  }
}
