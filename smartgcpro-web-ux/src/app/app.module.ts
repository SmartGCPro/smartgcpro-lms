import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ViewAllCoursesComponent } from './homePageComponents/view-all-courses/view-all-courses.component';
import { TestmonialsComponent } from './homePageComponents/testmonials/testmonials.component';
import {CommonServiceService} from './services/common-service.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule} from '@angular/common/http';
import {Compiler, COMPILER_OPTIONS, CompilerFactory} from '@angular/core';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';
export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ViewAllCoursesComponent,
    TestmonialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpModule,
    CarouselModule,
    HttpClientModule,
    MatCardModule,
    NgbModule
  ],
  providers: [CommonServiceService,
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
