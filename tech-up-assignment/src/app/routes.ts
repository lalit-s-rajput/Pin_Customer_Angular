import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import * as fromContainers from './pinContainer/containers';
export const allRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: fromContainers.PinContainerComponent,
        loadChildren: () =>
          import('./pinContainer/pin-container.module').then(
            (m) => m.PinModule
          ),
      },
    ],
  },
];
