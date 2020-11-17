import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: boolean;

  loginGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private readonly loginService: LoginService,
              private readonly router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    this.error = false
    
    this.loginService.authentication({username: 'demoar/' + this.loginGroup.get('username').value,
                                      password: this.loginGroup.get('password').value}).pipe(take(1)).subscribe(
                                        (response) => {
                                          const res = response['response'];
                                          if(res.code.toLowerCase() === 'ok'){
                                            this.authService.setProfile(res);
                                            console.log(res.user);
                                            this.loginService.currentDomainId = res.user.domainid;
                                            this.router.navigate(['dashboard']);
                                          } else {
                                            this.error = true;
                                          }
                                        },
                                        (err) => {
                                          this.error = true;
                                        }
                                      )
  }

}
