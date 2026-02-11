import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) {}
 
     goToLogin() {
    this.router.navigate(['/login']);
  }

    
  

  goToSignup(): void {
    console.log('Navigate to signup');
    
  }
}