import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl: `app/user/profile.component.html`,
  styles: [`
  em { float: right; color: #E05C65; padding-left: 10px; }
  .error input { background-color:#E3C3C5; }
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-placeholder { color: #999; }
  .error :-moz-placeholder { color: #999; }
  .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor(private auth: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });

  }

  saveProfile() {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(this.profileForm.value.firstName, this.profileForm.value.lastName)
        .subscribe(() => {
          this.toastr.success('Profile saved')
        })
      // this.router.navigate(['events'])
    }
  }

  logout() {
    this.auth.logout().subscribe((resp) => {
      this.router.navigate(['/user/login'])
    })
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched
  }
  cancel() {
    this.router.navigate(['events'])
  }

}