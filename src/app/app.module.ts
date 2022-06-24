import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ChristianHomeComponentComponent } from './christian-home-component/christian-home-component.component';
import { ChristianListComponentComponent } from './christian-list-component/christian-list-component.component';
import { ChristianListServiceService } from './christian-list-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: ChristianHomeComponentComponent },
      { path: 'list', component: ChristianListComponentComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ChristianHomeComponentComponent,
    ChristianListComponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ChristianListServiceService],
})
export class AppModule {}
