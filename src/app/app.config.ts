// import { ApplicationConfig, isDevMode } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideAnimations } from '@angular/platform-browser/animations';
//
// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { TranslocoHttpLoader } from './transloco-loader';
// import { provideTransloco } from '@jsverse/transloco';
//
// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideAnimations(), provideClientHydration(), provideHttpClient(), provideTransloco({
//         config: {
//           availableLangs: ['en', 'rus'],
//           defaultLang: 'en',
//           // Remove this option if your application doesn't support changing language in runtime.
//           reRenderOnLangChange: true,
//           prodMode: !isDevMode(),
//         },
//         loader: TranslocoHttpLoader
//       })]
// };


// import { ApplicationConfig, isDevMode } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideAnimations } from '@angular/platform-browser/animations';
//
// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader'; // Импортируем TranslateHttpLoader
// import { TRANSLOCO_LOADER } from '@jsverse/transloco';
// import { provideTransloco } from '@jsverse/transloco';
//
// // Создайте функцию для загрузки переводов
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }
//
// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideAnimations(), provideClientHydration(), provideHttpClient(),
//     provideTransloco({
//       config: {
//         availableLangs: ['en', 'rus'],
//         defaultLang: 'en',
//         // Remove this option if your application doesn't support changing language in runtime.
//         reRenderOnLangChange: true,
//         prodMode: !isDevMode(),
//       },
//       loader: { // Используйте provideTransloco для загрузки переводов
//         provide: TRANSLOCO_LOADER,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       },
//     })
//   ]
// };

import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideTransloco, TRANSLOCO_LOADER } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import {TranslocoHttpLoader} from "./transloco-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideClientHydration(),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'rus'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    })
  ]
};
