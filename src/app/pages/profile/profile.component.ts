import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgIf
  ],
  styleUrls: ['profile.component.css']
})
export class ProfileComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;
  googleLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.isLoading = true;
    this.errorMessage = '';

    try {
      await this.authService.login(this.email, this.password);
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
      case 'auth/invalid-email':
        return 'Email invalid';
      case 'auth/user-disabled':
        return 'Contul a fost dezactivat';
      case 'auth/user-not-found':
        return 'Nu există utilizator cu acest email';
      case 'auth/wrong-password':
        return 'Parolă incorectă';
      case 'auth/popup-closed-by-user':
        return 'Autentificarea a fost anulată';
      case 'auth/account-exists-with-different-credential':
        return 'Acest email este deja înregistrat cu o altă metodă';
      default:
        return 'Eroare la autentificare';
    }
  }
}
