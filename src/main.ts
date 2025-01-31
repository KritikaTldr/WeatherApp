import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';  // ✅ Import this

bootstrapApplication(AppComponent, {
    providers: [provideHttpClient()]
})
    .catch(err => console.error(err));
