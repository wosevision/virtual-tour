import * as angular from 'angular';

import AFrame from './aframe/aframe';
import { ButtonbarModule } from './buttonbar/buttonbar';
import { DrilldownModule } from './drilldown/drilldown';
import { MapModule } from './map/map';
import { SearchModule } from './search/search';
import { SettingsModule } from './settings/settings';
import TitleBar from './titlebar/titlebar';

const componentModule = angular.module('app.components', [
  AFrame,
  ButtonbarModule,
  DrilldownModule,
  MapModule,
  SearchModule,
	SettingsModule,
  TitleBar,
])

.name;

export default componentModule;
