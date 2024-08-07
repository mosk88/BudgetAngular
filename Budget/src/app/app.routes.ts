import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompteComponent } from './compte/compte.component';
import { BudgetComponent } from './budget/budget.component';
import { IndicateurComponent } from './indicateur/indicateur.component';

export const routes: Routes = [
    {
        path: '', component:HomeComponent
        
    },
    {
        path: 'dashboard', component:DashboardComponent
    },
     {
        path: 'compte', component:CompteComponent
    },
    {
        path: 'budget', component:BudgetComponent
    },
     {
        path: 'indicateur', component:IndicateurComponent
    }
    
];
