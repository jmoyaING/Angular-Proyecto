import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'corporativos',
    loadChildren: () => import('../../corporativos/corporativos.module').then(m => m.CorporativosModule)
  },
    {
        path: 'corporativos/detalle/:id',
        loadChildren: () => import('../../detalle-corporativos/detalle-corporativo.module').then(m => m.DetalleCorporativosModule)
    }
];
