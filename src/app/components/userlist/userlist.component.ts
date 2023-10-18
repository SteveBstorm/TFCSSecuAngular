import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, User } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  userlist! : User[]

  constructor(
    private _auth : AuthService,
    private _ar : ActivatedRoute
    ){}

  ngOnInit() {
    this.userlist = this._ar.snapshot.data["maliste"]
    console.log(this._auth.getRole())
    // this._auth.getAll().subscribe({
    //   next : (list : User[]) => this.userlist = list
    // })
  }
}
