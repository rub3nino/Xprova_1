import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // ✅ Ora funziona correttamente

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // ✅ Qui viene abilitato il Router
  ]
}).catch(err => console.error(err));