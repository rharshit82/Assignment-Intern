import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemTestsComponent } from './pages/system-tests/system-tests.component';
import { SystemTestMaintenanceComponent } from './components/system-test-maintenance/system-test-maintenance.component';
import { TestTasksComponent } from './components/test-tasks/test-tasks.component';
import { TestDataComponent } from './components/test-data/test-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OtherComponentsComponent } from './components/other-components/other-components.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@NgModule({
  declarations: [
    AppComponent,
    SystemTestsComponent,
    SystemTestMaintenanceComponent,
    TestTasksComponent,
    TestDataComponent,
    OtherComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
