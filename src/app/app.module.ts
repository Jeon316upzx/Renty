import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressComponent } from './progress/progress.component';

import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { PaginateComponent } from './paginate/paginate.component';
import { MyfilterPipe } from './myfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProgressComponent,
    ContentComponent,
    FooterComponent,
    PaginateComponent,
    MyfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
