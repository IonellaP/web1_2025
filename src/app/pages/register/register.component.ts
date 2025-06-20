import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;
  googleLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit(form: NgForm) {
    if (!form.valid || this.password !== this.confirmPassword) return;

    this.isLoading = true;
    this.errorMessage = '';

    try {
      await this.authService.register(this.email, this.password);
      await this.router.navigate(['']);
    } catch (error: any) {
      this.errorMessage = this.getErrorMessage(error.code);
    } finally {
      this.isLoading = false;
    }
  }

  async onGoogleSignIn() {
    this.googleLoading = true;
    this.errorMessage = '';

    try {
      await this.authService.googleSignIn();
      await this.router.navigate(['']);
    } catch (error: any) {
      this.errorMessage = this.getErrorMessage(error.code);
    } finally {
      this.googleLoading = false;
    }
  }

  private getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Emailul este deja înregistrat';
      case 'auth/invalid-email':
        return 'Email invalid';
      case 'auth/weak-password':
        return 'Parola trebuie să aibă minim 6 caractere';
      case 'auth/popup-closed-by-user':
        return 'Autentificarea a fost anulată';
      case 'auth/account-exists-with-different-credential':
        return 'Acest email este deja înregistrat cu o altă metodă';
      default:
        return 'Eroare la înregistrare';
    }
  }
}
