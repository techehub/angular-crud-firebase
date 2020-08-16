import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formData: Profile = new Profile()

  profiles : Profile []
  constructor( private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.readData().subscribe(response => {
      this.profiles = response.map(document => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}
        } as Profile;
      })

    });
  }

  saveData (){

    if (this.formData.id ==null){
      console.log (" saving ")
      this.profileService.saveData(this.formData)
      this.formData= new Profile()
    }
    else {
      console.log ("updating")
     this.profileService.updateData(this.formData)
     this.formData= new Profile()
     console.log ("updated")
    }



  }

  editData(profile){
    this.formData = profile
  }
  deleteData(profile){
    this.profileService.deleteData(profile)
  }
}
