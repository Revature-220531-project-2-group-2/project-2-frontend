import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog, public appComponent: AppComponent,
    private router: Router) { }

  ngOnInit(): void {
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      width: '700px',
      height: '700px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  loginRedirect(): void {
    this.router.navigate(['character-sheet']);
  }



}
