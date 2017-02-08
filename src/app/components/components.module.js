import angular from 'angular';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { NavModule } from './nav/nav.module';
import { SectionModule } from './section/section.module';

export const ComponentsModule = angular
  .module('mnspcd.components', [
    AboutModule,
    HomeModule,
    NavModule,
    SectionModule,
  ])
  .name;
