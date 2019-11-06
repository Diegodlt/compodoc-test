import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: 'one', component: OneComponent},
            {path: 'two', component: TwoComponent},
            {path: 'three', component: ThreeComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}