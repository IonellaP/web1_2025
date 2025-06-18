import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { firebaseConfig } from './firebase.config';

const clientProviders = [
  ...appConfig.providers,
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideAuth(() => getAuth())
];

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: clientProviders
}).catch((err) => console.error(err));
