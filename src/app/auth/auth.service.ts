import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, User } from '@angular/fire/auth';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();
  public isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user));
  public userInitials$: Observable<string> = this.user$.pipe(
    map(user => this.getUserInitials(user?.email))
  );

  constructor(
    @Optional() private auth: Auth,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.initializeAuthState();
  }

  private initializeAuthState(): void {
    if (this.auth && isPlatformBrowser(this.platformId)) {
      authState(this.auth).subscribe({
        next: (user) => {
          this.userSubject.next(user);
        },
        error: (err) => {
          console.error('Auth state error:', err);
          this.userSubject.next(null);
        }
      });
    } else {
      this.userSubject.next(null);
    }
  }

  register(email: string, password: string) {
    if (!this.auth || !isPlatformBrowser(this.platformId)) {
      return Promise.reject('Authentication not available');
    }

    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => this.router.navigate(['']))
      .catch(error => {
        console.error('Registration error:', error.message);
        throw this.getErrorMessage(error.code);
      });
  }

  login(email: string, password: string) {
    if (!this.auth || !isPlatformBrowser(this.platformId)) {
      return Promise.reject('Authentication not available');
    }

    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => this.router.navigate(['']))
      .catch(error => {
        console.error('Login error:', error.message);
        throw this.getErrorMessage(error.code);
      });
  }

  logout() {
    if (!this.auth || !isPlatformBrowser(this.platformId)) {
      return Promise.reject('Authentication not available');
    }

    return signOut(this.auth)
      .then(() => this.router.navigate(['/login']))
      .catch(error => {
        console.error('Logout error:', error.message);
        throw error;
      });
  }

  private getUserInitials(email?: string | null): string {
    if (!email) return '';

    const [namePart] = email.split('@');
    const nameParts = namePart.split(/[._]/);

    return nameParts
      .filter(part => part.length > 0)
      .slice(0, 2)
      .map(part => part.charAt(0).toUpperCase())
      .join('');
  }

  private getErrorMessage(code: string): string {
    const messages: Record<string, string> = {
      'auth/email-already-in-use': 'Emailul este deja înregistrat',
      'auth/invalid-email': 'Email invalid',
      'auth/weak-password': 'Parola trebuie să aibă minim 6 caractere',
      'auth/user-disabled': 'Contul a fost dezactivat',
      'auth/user-not-found': 'Nu există utilizator cu acest email',
      'auth/wrong-password': 'Parolă incorectă',
      'auth/too-many-requests': 'Prea multe încercări. Încearcă mai târziu'
    };

    return messages[code] || 'Eroare la autentificare';
  }
}
