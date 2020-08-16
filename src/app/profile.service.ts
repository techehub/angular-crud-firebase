import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private firestore: AngularFirestore) { }

  saveData(profile: Profile){
    console.log("saving - ", profile)
    this.firestore.collection('profile').add ({...profile})
    console.log("saved")
  }
  updateData (profile: Profile){
    console.log("updating - ", profile)
    this.firestore.doc('profile/'+ profile.id ).update({...profile})
    console.log("updated")
  }
  readData(){
    return this.firestore.collection('profile').snapshotChanges();
  }

  deleteData (profile:Profile){
    console.log("deleteing - ", profile)
    this.firestore.doc('profile/'+ profile.id ).delete()
    console.log("deleted")
  }

}
