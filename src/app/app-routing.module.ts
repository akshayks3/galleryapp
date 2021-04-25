import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [{
  path: "",
  loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
}, {
  path: "about",
  loadChildren: () => import("./about/about.module").then((m) => m.AboutModule),
}, {
  path: "gallery",
  loadChildren: () => import("./gallery/gallery.module").then((m) => m.GalleryModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: "enabled",
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
