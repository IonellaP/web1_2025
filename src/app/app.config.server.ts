import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {firebaseConfig} from '../firebase.config';

export const serverConfig: ApplicationConfig = {
  providers: [
    ...appConfig.providers,
    provideServerRendering(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
  ]
};
