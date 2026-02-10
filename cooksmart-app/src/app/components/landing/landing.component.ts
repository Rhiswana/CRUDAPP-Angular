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
 
  goToLogin(): void {
    console.log('Navigate to login');
    
  }

  goToSignup(): void {
    console.log('Navigate to signup');
    
  }
}