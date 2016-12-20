import angular from 'angular'; export default angular.module('app.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('buttonbar/_buttonbar.html','<aside\n\tclass="button-bar"\n\tng-class="{\'collapsed\': $ctrl.condensed}"\n\tng-if="$ctrl.open&&!$ctrl.mobile.screen"\n\tmd-whiteframe="2"\n\tlayout="column"\n\tlayout-align="end end"\n\tflex="grow">\n\t<div ng-repeat="(v,view) in ::$ctrl.items"\n\t\tclass="button-bar-btn"\n\t\tng-class="{ \'is-active\': $ctrl.menuOpen && (v | isState)}"\n\t\tlayout="column"\n\t\tlayout-align="center center"\n\t\tflex="grow"\n  \tng-click="$ctrl.toggleMenu(\'right\', v)"\n  \tmd-ink-ripple="#0077CA"\n  \tid="{{::v}}">\n  \t<ng-md-icon icon="{{ ::view.icon }}" style="fill: #ffffff;"></ng-md-icon>\n    <span ng-bind="::view.label"></span>\n    <md-tooltip md-direction="left" md-autohide md-delay="$ctrl.condensed ? 0 : 750" ng-if="!(mobile||!$root.appSettings.settings.showHints.val)">\n      {{ $ctrl.condensed ? view.label : view.desc }}\n    </md-tooltip>\n  </div>\n</aside>');
$templateCache.put('chat/_chat.html','<div md-whiteframe="3" layout layout-fill flex>\n\t<md-list layout="column" layout-fill flex>\n\t  <md-subheader class="md-no-sticky" flex="nogrow">Messages</md-subheader>\n\t  <div flex="grow">\n\t\t  <md-list-item class="md-3-line" ng-repeat="item in ctrl.messages" ng-click="ctrl.addChatMessage({username:\'me\', message:\'well heyaaaa\'})">\n\t\t    <!-- <img ng-src="{{item.face}}?{{$index}}" class="md-avatar" alt="{{item.who}}" /> -->\n\t\t    <div class="md-list-item-text" layout="column">\n\t\t      <h3>{{ item.username }}</h3>\n\t\t      <p>{{ item.message }}</p>\n\t\t    </div>\n\t\t  </md-list-item>\n\t  </div>\n\t  <!-- <span flex></span> -->\n\t  <md-list-item flex="nogrow">\n      <md-input-container class="md-block">\n        <label>Enter message here</label>\n        <textarea ng-model="message" md-maxlength="150" rows="5" md-select-on-focus></textarea>\n      </md-input-container>\n\t  </md-list-item>\n\t</md-list>\n</div>');
$templateCache.put('titlebar/_titlebar-button.html','<md-button\n\tclass="icon-button {{ ::class }}"\n\tng-click="onClick()"\n\tng-class="{ \'active\': active }"\n\taria-label="{{ ::label }}">\n  <ng-md-icon\n  \ticon="{{ active ? icon[0] || icon : icon[1] || icon }}"\n  \tstyle="fill: currentColor;">\n  </ng-md-icon>\n  <md-tooltip md-direction="bottom" md-autohide ng-if="tooltip && !(mc.mobile||!$root.appSettings.settings.showHints.val)">\n    {{ active ? (tooltip[0] || tooltip) : (tooltip[1] || tooltip) }}\n  </md-tooltip>\n\t<span ng-if="::(!tooltip)">{{ ::label }}</span>\n</md-button>');
$templateCache.put('titlebar/_titlebar.html','<md-toolbar class="md-accent md-hue-1 title-bar" layout="row" ng-class="{\'is-mobile\' : $ctrl.mobile.screen}">\n\n  <md-toolbar-filler flex="nogrow" layout layout-align="center center">\n    <img ui-sref="locations" ng-src="https://shared.uoit.ca/global/files/img/logos/UOIT_blue_shield.png" alt="University of Ontario Institute of Technology" class="logo-shield" id="uoit_logo">\n  </md-toolbar-filler>\n\n  <div class="md-toolbar-tools">\n    <h1 ui-sref="locations">{{::$ctrl.title}}</h1>\n\n    <span flex></span>\n\n    <ng-transclude ng-if="!$ctrl.mobile.screen" id="toolbar-controls" layout layout-align="center center"></ng-transclude>\n    <md-button\n    \tng-if="$ctrl.mobile.screen"\n\t\t\tclass="menu-button"\n\t\t\tng-click="toggleMenu()"\n\t\t\taria-label="Toggle menu">\n\t\t  <ng-md-icon\n\t\t  \ticon="menu"\n\t\t  \tstyle="fill: white;">\n\t\t  </ng-md-icon>\n\t\t</md-button>\n  </div>\n\n</md-toolbar>');
$templateCache.put('aframe/editor/_editor-dialog.html','<div class="md-whiteframe-16dp floating-panel" layout="column">\n\n  <div class="md-toolbar-tools">\n    <span class="md-title">{{ ::($ctrl.newItem ? \'New\' : \'Edit\') }}{{ ::($ctrl.item.hasOwnProperty(\'scene\') ? \' scene link\': \'\') }}{{ ::($ctrl.item.hasOwnProperty(\'parent\') ? \' scene\': \'\') }}{{ ::($ctrl.item.hasOwnProperty(\'content\') || $ctrl.item.hasOwnProperty(\'feature\') ? \' hotspot\' : \'\') }}</span>\n    <span flex></span>\n    <md-button class="md-icon-button md-primary" aria-label="Cancel" ng-click="$ctrl.closeDialog()">\n      <ng-md-icon icon="close" size="24"></ng-md-icon>\n    </md-button>\n  </div>\n\t<v-accordion class="vAccordion--default" multiple flex>\n\t  <!-- add expanded attribute to open the section -->\n\t  <v-pane ng-if="::($ctrl.item.hasOwnProperty(\'name\') || $ctrl.item.hasOwnProperty(\'label\') || $ctrl.item.hasOwnProperty(\'code\') || $ctrl.item.hasOwnProperty(\'desc\') || $ctrl.item.hasOwnProperty(\'feature\'))">\n\t    <v-pane-header>\n\t\t\t\tMetadata\n\t    </v-pane-header>\n\t    <v-pane-content>\n\t\t\t  <div layout="row" layout-padding ng-if="::$ctrl.item.hasOwnProperty(\'name\')">\n\t\t\t    <md-input-container flex style="margin-bottom:0;padding-bottom:0;">\n\t\t\t    \t<label>Name</label>\n\t\t\t      <input type="text" flex ng-model="$ctrl.item.name" aria-label="name">\n\t\t\t    </md-input-container>\n\t\t\t  </div>\n\t\t\t  <div layout="row" layout-padding ng-if="::$ctrl.item.hasOwnProperty(\'label\')">\n\t\t\t    <md-input-container flex style="margin-bottom:0;padding-bottom:0;">\n\t\t\t    \t<label>Label</label>\n\t\t\t      <input type="text" flex ng-model="$ctrl.item.label" aria-label="label">\n\t\t\t    </md-input-container>\n\t\t\t  </div>\n\t\t\t  <div layout="row" layout-padding ng-if="::$ctrl.item.hasOwnProperty(\'code\')">\n\t\t\t    <md-input-container flex style="margin-bottom:0;padding-bottom:0;">\n\t\t\t    \t<label>Code</label>\n\t\t\t      <input type="text" flex ng-model="$ctrl.item.code" aria-label="code">\n\t\t\t    </md-input-container>\n\t\t\t  </div>\n\t\t\t  <div layout="column" layout-padding ng-if="::($ctrl.item.hasOwnProperty(\'desc\') || $ctrl.item.hasOwnProperty(\'feature\'))">\n\t\t    \t<div><md-checkbox\n              ng-model="$ctrl.item.linked"\n              aria-label="Link to campus map feature"\n              class="md-primary">\n            Link to campus map feature?\t\n          </md-checkbox></div>\n\t\t\t\t\t<div ng-if="$ctrl.item.linked">\n\t\t\t\t    <md-select placeholder="Select category" ng-model="$ctrl.category" md-on-open="$ctrl.loadCategories()" ng-model-options="{trackBy: \'$value._id\'}" ng-change="$ctrl.onChangeCategory()">\n\t\t\t\t      <md-option ng-value="category" ng-repeat="category in $ctrl.categories track by category._id">{{::category.name}}</md-option>\n\t\t\t\t    </md-select>\n\t\t\t\t    <md-select placeholder="Select feature" ng-model="$ctrl.feature" md-on-open="$ctrl.loadFeatures()" ng-model-options="{trackBy: \'$value._id\'}" ng-change="$ctrl.onChangeFeature()">\n\t\t\t\t      <md-option ng-value="feature" ng-repeat="feature in $ctrl.features track by feature._id">{{::feature.properties.name}}</md-option>\n\t\t\t\t    </md-select>\n\t\t\t\t  </div>\n\t        <md-input-container ng-if="!$ctrl.item.linked">\n\t          <label>Content</label>\n\t          <!-- <textarea ng-model="$ctrl.item.desc" md-maxlength="250" rows="4" md-select-on-focus></textarea> -->\n\t          <ng-wig ng-model="$ctrl.item.desc"></ng-wig>\n\t        </md-input-container>\n        </div>\n\t    </v-pane-content>\n\t  </v-pane>\n\t  <v-pane ng-if="::$ctrl.item.position.length">\n\t    <v-pane-header>\n\t\t\t\tPosition\n\t    </v-pane-header>\n\t    <v-pane-content>\n\t\t\t  <div layout="row" layout-padding>\n\t\t\t    <md-input-container flex ng-repeat="val in ::[{label:\'x\',path:\'M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z\'},{label:\'z\',path:\'M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z\'},{label:\'y\',path:\'M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z\'}] track by $index" style="margin-bottom:0;padding-bottom:0;margin-top:36px;">\n\t\t\t    \t<label layout layout-align="space-between center"><strong>{{ ::val.label }}</strong><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" ng-attr-d="{{ ::val.path }}" /></svg></label>\n\t\t\t      <input type="number" min="-15" max="15" step="0.05" flex ng-model="$ctrl.item.position[$index]" to-number aria-label="position" aria-controls="scenelink-position">\n\t\t\t    </md-input-container>\n\t\t\t  </div>\n\t    </v-pane-content>\n\t  </v-pane>\n\n\t  <v-pane ng-if="::$ctrl.item.rotation.length">\n\t    <v-pane-header>\n\t\t\t\tRotation\n\t    </v-pane-header>\n\t    <v-pane-content>\n\t\t\t  <div layout="row" layout-padding>\n\t\t\t    <md-input-container flex ng-repeat="val in ::[{label:\'roll\',path:\'M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z\'},{label:\'yaw\',path:\'M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z\'},{label:\'pitch\',path:\'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z\'}] track by $index" style="margin-bottom:0;padding-bottom:0;margin-top:36px;">\n\t\t\t    \t<label layout layout-align="space-between center"><strong>{{ ::val.label }}</strong><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" ng-attr-d="{{ ::val.path }}" /></svg></label>\n\t\t\t      <input type="number" min="-180" max="180" step="5" flex ng-model="$ctrl.item.rotation[$index]" to-number aria-label="rotation" aria-controls="scenelink-rotation">\n\t\t\t    </md-input-container>\n\t\t\t  </div>\n\t    </v-pane-content>\n\t  </v-pane>\n\n\t  <v-pane ng-if="::($ctrl.item.hasOwnProperty(\'scene\') || $ctrl.item.hasOwnProperty(\'parent\') || $ctrl.item.hasOwnProperty(\'building\'))">\n\t    <v-pane-header>\n\t\t\t\tLink\n\t    </v-pane-header>\n\t    <v-pane-content>\n\t\t\t  <div layout="row" layout-padding>\n\t\t\t    <md-select placeholder="Select location" ng-model="$ctrl.location" md-on-open="$ctrl.loadLocations()" ng-model-options="{trackBy: \'$value._id\'}" ng-change="$ctrl.onChangeLocation()">\n\t\t\t      <md-option ng-value="location" ng-repeat="location in $ctrl.locations track by location._id">{{::location.label}}</md-option>\n\t\t\t    </md-select>\n\t\t\t    <md-select placeholder="Select building" ng-model="$ctrl.building" md-on-open="$ctrl.loadBuildings()" ng-model-options="{trackBy: \'$value._id\'}" ng-change="$ctrl.onChangeBuilding()">\n\t\t\t      <md-option ng-value="building" ng-repeat="building in $ctrl.buildings track by building._id">{{::building.label}}</md-option>\n\t\t\t    </md-select>\n\t\t\t    <md-select ng-if="$ctrl.item.hasOwnProperty(\'scene\')" placeholder="Select scene" ng-model="$ctrl.scene" md-on-open="$ctrl.loadScenes()" ng-model-options="{trackBy: \'$value._id\'}" ng-change="$ctrl.onChangeScene()">\n\t\t\t      <md-option ng-value="scene" ng-repeat="scene in $ctrl.scenes track by scene._id">{{::scene.name}}</md-option>\n\t\t\t    </md-select>\n\t\t\t  </div>\n\t    </v-pane-content>\n\t  </v-pane>\n\t</v-accordion>\n\n  <div class="md-toolbar-tools">\n    <md-button class="md-warn" aria-label="Go Back" ng-click="$ctrl.removeThis()">\n      {{ ::($ctrl.newItem ? \'Cancel\' : \'Delete\') }}\n    </md-button>\n    <span flex></span>\n    <md-button class="md-primary" aria-label="Save draft" ng-click="$ctrl.saveDraft()">\n      Save draft\n    </md-button>\n    <md-button class="md-raised md-primary" aria-label="Publish" ng-click="$ctrl.publish()">\n      {{ ::($ctrl.newItem ? \'Add\' : \'Publish\') }}\n    </md-button>\n  </div>\n\n</div>');
$templateCache.put('aframe/editor/_editor.html','<md-fab-toolbar md-open="demo.isOpen" count="demo.count" md-direction="right">\n  <md-fab-trigger class="align-with-text">\n    <md-button aria-label="Open scene editor menu" class="md-fab md-primary">\n\t\t  <md-tooltip md-direction="right" md-autohide ng-if="!(mc.mobile||!$root.appSettings.settings.showHints.val)">\n\t\t    Open scene editor menu\n\t\t  </md-tooltip>\n      <ng-md-icon icon="edit"></ng-md-icon>\n    </md-button>\n  </md-fab-trigger>\n\n  <md-toolbar>\n    <md-fab-actions class="md-toolbar-tools" ng-mouseleave="$ctrl.tooltipMsg = false">\n      <md-button aria-label="New scene" class="md-icon-button" ng-mouseenter="$ctrl.tooltipMsg = \'New scene\'" ng-click="$ctrl.newScene($event)">\n        <ng-md-icon icon="insert_drive_file"></ng-md-icon>\n      </md-button>\n      <span class="fab-divider"></span>\n      <md-button aria-label="New scene link" class="md-icon-button" ng-mouseenter="$ctrl.tooltipMsg = \'New scene link\'" ng-click="$ctrl.addItem($event, \'sceneLinks\')">\n        <ng-md-icon icon="add_location"></ng-md-icon>\n      </md-button>\n      <md-button aria-label="photo" class="md-icon-button" ng-mouseenter="$ctrl.tooltipMsg = \'New hotspot\'" ng-click="$ctrl.addItem($event, \'hotSpots\')">\n        <ng-md-icon icon="info_outline"></ng-md-icon>\n      </md-button>\n      <span class="fab-divider"></span>\n      <md-button aria-label="Save draft" class="md-icon-button" ng-mouseenter="$ctrl.tooltipMsg = \'Save draft\'" ng-click="$ctrl.saveDraft()">\n        <ng-md-icon icon="save"></ng-md-icon>\n      </md-button>\n\n      <md-menu md-offset="0 -7">\n        <md-button aria-label="Load draft" class="md-icon-button" ng-mouseenter="$ctrl.tooltipMsg = \'Load draft\'" ng-click="$ctrl.checkForDraft(false);$mdOpenMenu($event)">\n\t        <ng-md-icon icon="folder_open"></ng-md-icon>\n\t      </md-button>\n        <md-menu-content width="6" ng-switch="$ctrl.draftList.length">\n          <md-menu-item ng-repeat="draft in $ctrl.draftList">\n            <md-button ng-click="$ctrl.loadDraft(draft)">{{ draft.updatedAt | date:\'medium\' }}</md-button>\n            <md-button ng-click="$ctrl.discardDraft(draft)" class="md-icon-button md-raised md-warn">\n\t\t\t        <ng-md-icon icon="delete" size="22"></ng-md-icon>\n\t\t\t      </md-button>\n          </md-menu-item>\n          <md-menu-item ng-hide="$ctrl.draftList.length">\n          \t<span>No drafts available</span>\n          </md-menu-item>\n        </md-menu-content>\n      </md-menu>\n\n      <md-button aria-label="Publish changes" class="md-icon-button" ng-mouseenter="$ctrl.tooltipMsg = \'Publish changes\'" ng-click="$ctrl.publish()">\n        <ng-md-icon icon="publish"></ng-md-icon>\n      </md-button>\n      <md-button ng-show="$ctrl.tooltipMsg">{{ $ctrl.tooltipMsg }}</md-button>\n    </md-fab-actions>\n  </md-toolbar>\n</md-fab-toolbar>');
$templateCache.put('aframe/hotspot/_hotspot.html','<a-entity\n\tng-attr-position="{{ hotSpot.position.join(\' \') }}" look-at="[camera]">\n\t<a-torus \n\t\tarc="360"\n\t\tradius="0.25"\n\t\tradius-tubular="0.015"\n\t\tsegments-tubular="32"\n\t\trotation="0 0 0"\n\t\tmixin="mixin-blue"\n\t\tshader="flat"\n\t\tevent-set__1="_event: mouseenter; material.opacity: 0.6; material.color: #C71566;"\n\t\tevent-set__2="_event: mouseleave; material.opacity: 0.85; material.color: #0077CA;">\n\t\t<a-animation\n\t\t\tattribute="rotation"\n\t\t\tfrom="0 0 0"\n\t\t\tto="0 360 0"\n\t\t\trepeat="indefinite"\n\t\t\tdirection="alternate"\n\t\t\tdur="2000">\n\t\t</a-animation>\n\t\t<a-entity\n\t\t\tposition="-0.025 -0.165 -0.01"\n\t\t\tscale="0.6 0.6 0.6"\n\t\t\ttext="text:i"\n\t\t\tmaterial="shader: flat;color:#0077CA;"\n\t\t\tevent-set__1="_event: mouseenter; material.opacity: 0.6; material.color: #C71566;"\n\t\t\tevent-set__2="_event: mouseleave; material.opacity: 0.85; material.color: #0077CA;">\n\t\t</a-entity>\n\t\t<a-entity \n\t\t\tng-attr-id="hotSpot_{{ ::hotSpot._id }}"\n\t\t\tscale="0.5 0.5 0.5"\n\t\t\tvisible="false"\n\t\t\tevent-set__1="_event: mouseenter; visible: true;"\n\t\t\tevent-set__2="_event: mouseleave; visible: false;">\n\t\t\t<a-sphere radius="0.6"  mixin="mixin-glow">\n\t\t\t\t<a-animation\n\t\t\t\t\tattribute="scale"\n\t\t\t\t\tfrom="0.9 0.9 0.9"\n\t\t\t\t\tto="1.25 1.25 1.25"\n\t\t\t\t\trepeat="indefinite"\n\t\t\t\t\tdirection="alternate"\n\t\t\t\t\tdur="1500">\n\t\t\t\t</a-animation>\n\t\t\t</a-sphere>\n\t\t\t<a-sphere radius="0.6" mixin="mixin-glow">\n\t\t\t\t<a-animation\n\t\t\t\t\tattribute="scale"\n\t\t\t\t\tfrom="1 1 1"\n\t\t\t\t\tto="1.5 1.5 1.5"\n\t\t\t\t\trepeat="indefinite"\n\t\t\t\t\tdirection="alternate"\n\t\t\t\t\tdur="1500">\n\t\t\t\t</a-animation>\n\t\t\t</a-sphere>\n\t\t</a-entity>\n\t</a-torus>\n</a-entity>');
$templateCache.put('aframe/scenelink/_scenelink.html','<!-- ARROW GEOMETRY WITH HOVER ANIMATION -->\n<a-entity\n\tng-attr-position="{{ sceneLink.position.join(\' \') }}"\n\tng-attr-rotation="{{ sceneLink.rotation.join(\' \') }}"\n\tevent-set__1="_event: mouseenter; scale: 1.05 1.1 1.05;"\n\tevent-set__2="_event: mouseleave; scale: 1 1 1;">\n\t<a-cone\n\t\theight="0.5"\n\t\tradius-bottom="0.5"\n\t\tradius-top="0"\n\t\tscale="0.1 1 1"\n\t\troughness="1"\n\t\tsegments-height="1"\n\t\tsegments-radial="4"\n\t\tmixin="mixin-blue"\n\t\tevent-set__1="_event: mouseenter; material.opacity: 0.6; material.color: #C71566;"\n\t\tevent-set__2="_event: mouseleave; material.opacity: 0.85; material.color: #0077CA;">\n\t\t<!-- ROCKING ANIMATION -->\n\t\t<a-animation\n\t\t\tattribute="position"\n\t\t\tfrom="0 0 0"\n\t\t\tto="0 -0.1 0"\n\t\t\trepeat="indefinite"\n\t\t\tdirection="alternate"\n\t\t\tdur="500">\n\t\t</a-animation>\n\t\t<!-- GLOW SPHERES -->\n\t\t<a-entity \n\t\t\tng-attr-id="link_{{ ::sceneLink.scene }}"\n\t\t\tscale="5 0.5 0.5"\n\t\t\tvisible="false"\n\t\t\tevent-set__1="_event: mouseenter; visible: true;"\n\t\t\tevent-set__2="_event: mouseleave; visible: false;">\n\t\t\t<!-- ng-attr-id="link_{{ ::scene._id }}" -->\n<!-- \t\t\t<a-entity position="0 0 0.9">\n\t\t\t\t<a-entity\n\t\t\t\t\tposition="0.75 0 0"\n\t\t\t\t\tscale="0.3 0.3 0.3"\n\t\t\t\t\trotation="90 0 -90"\n\t\t\t\t\tng-attr-text="text:{{ ::scene.parent.label }}"\n\t\t\t\t\tmaterial="shader: flat;color:white;opacity: 0.6">\n\t\t\t\t</a-entity>\n\t\t\t\t<a-entity\n\t\t\t\t\tposition="0.5 0 0"\n\t\t\t\t\tscale="0.3 0.3 0.3"\n\t\t\t\t\trotation="90 0 -90"\n\t\t\t\t\tng-attr-text="text:{{ ::scene.name }}"\n\t\t\t\t\tmaterial="shader: flat;color:white;opacity: 0.6">\n\t\t\t\t</a-entity>\n\t\t\t</a-entity> -->\n\t\t\t<a-sphere radius="0.6" mixin="mixin-glow">\n\t\t\t\t<a-animation\n\t\t\t\t\tattribute="scale"\n\t\t\t\t\tfrom="0.9 0.9 0.9"\n\t\t\t\t\tto="1.25 1.25 1.25"\n\t\t\t\t\trepeat="indefinite"\n\t\t\t\t\tdirection="alternate"\n\t\t\t\t\tdur="1500">\n\t\t\t\t</a-animation>\n\t\t\t</a-sphere>\n\t\t\t<a-sphere radius="0.6" mixin="mixin-glow" opacity="0.05">\n\t\t\t\t<a-animation\n\t\t\t\t\tattribute="scale"\n\t\t\t\t\tfrom="1 1 1"\n\t\t\t\t\tto="1.5 1.5 1.5"\n\t\t\t\t\trepeat="indefinite"\n\t\t\t\t\tdirection="alternate"\n\t\t\t\t\tdur="1500">\n\t\t\t\t</a-animation>\n\t\t\t</a-sphere>\n\t\t</a-entity>\n\t</a-cone>\n\t<!-- SHRINK ON CLICK -->\n\t<a-animation attribute="scale" begin="goto" dur="100" to="0 0 0"></a-animation>\n</a-entity>');
$templateCache.put('aframe/scene/_scene.html','<ng-transclude></ng-transclude>\n<a-scene id="aframe-scene"> <!-- stats -->\n\t<a-assets>\n\n\t\t<!-- GENERIC ASSETS -->\n<!-- \t\t<aframe-entity\n\t\t\tasset="true"\n\t\t\tng-repeat="asset in $ctrl.assets track by (\'asset_\' + asset._id)"\n\t\t\tng-if="asset"\n\t\t\ttype="{{asset.type}}"\n\t\t\tattrs="asset.attrs"\n\t\t\tentities="asset.entities">\n\t\t</aframe-entity> -->\n\t\t<a-mixin id="mixin-blue" material="color: #0077CA;opacity: 0.85; transparent: true;">\n\t\t</a-mixin>\n\t\t<a-mixin id="mixin-glow" material="color:white;shader:flat;opacity:0.1;transparent: true;"></a-mixin>\n\n\t</a-assets>\n\n\t\t<!-- CAMERA ENTITY -->\n\t\t<a-entity position="0 1.8 0" id="aframe-camera">\n\t\t\t<a-entity\n\t\t\t\tcamera\n\t\t\t\tmouse-cursor\n\t\t\t\treverse-look-controls\n\t\t\t\twasd-controls-enabled="false"\n\t\t\t\tlook-controls-enabled="false">\n\t\t\t\t<!-- VR CURSOR -->\n<!-- \t\t\t\t<a-cursor\n\t\t\t\t\tcolor="white"\n\t\t\t\t\traycaster="interval: 1000; recursive: true; objects: .scene-link">\n\t\t\t\t</a-cursor> -->\n\t\t\t</a-entity>\n\t\t</a-entity>\n\t\t\n\t\t<!-- GENERIC ENTITIES -->\n<!-- \t\t<aframe-entity\n\t\t\tng-repeat="entity in entities track by (\'entity_\' + entity._id)"\n\t\t\tng-if="entity"\n\t\t\ttype="{{entity.type}}"\n\t\t\tattrs="entity.attrs"\n\t\t\tentities="entity.entities">\n\t\t</aframe-entity> -->\n\t\t\n\t\t<!-- SCENE LINKS -->\n\t\t<a-entity\n\t\t\tng-repeat="sceneLink in $ctrl.sceneLinks track by sceneLink._id"\n\t\t\tclass="scene-link"\n\t\t\tscene-link="sceneLink">\n\t\t</a-entity>\n\t\t<!-- HOTSPOTS -->\n\t\t<a-entity\n\t\t\tng-repeat="hotSpot in $ctrl.hotSpots track by hotSpot._id"\n\t\t\tclass="hot-spot"\n\t\t\thot-spot="hotSpot">\n\t\t</a-entity>\n\n\n</a-scene>');
$templateCache.put('popup/error/_error.html','<md-dialog class="error-message">\n\t<md-dialog-content>\n\n\t\t<md-tabs class="md-primary" md-selected="error.sendReport" md-align-tabs="{{data.bottom ? \'bottom\' : \'top\'}}" md-dynamic-height md-border-bottom>\n\n      <md-tab id="message" label="error">\n\n\t\t\t\t<md-content layout-padding>\n\t\t\t\t\t<h2 class="md-display-1">{{ error.type || \'Whoops!\' }}</h2>\n\t\t\t\t\t<p>{{ error.message || \'An unknown error occurred.\' }}</p>\n\n\t\t\t\t\t<span class="md-caption"><strong>Maybe try:</strong></span>\n\t\t\t\t</md-content>\n\t\t\t\t<md-list>\n\t\t\t\t\t<md-divider></md-divider>\n\n\t\t\t\t\t<md-list-item class="md-2-line md-long-text" ng-if="error.suggestions.length > 0" ng-repeat="item in ::error.suggestions">\n\t\t        <ng-md-icon icon="{{ ::item.icon }}" size="24" style="fill: #0077CA;"></ng-md-icon>\n\t\t        <div class="md-list-item-text" layout="column">\n\t\t          <h3 bind-html-compile compile="::item.title"></h3>\n\t\t          <p>{{ ::item.desc }}</p>\n\t\t        </div>\n\t\t        <md-button class="md-secondary md-primary" ng-if="::item.action||item.goToSettings" ng-click="::item.goToSettings ? goToSettings() : item.action(item.params)">Show me how</md-button>\n\t\t\t\t\t</md-list-item>\n\n\t\t\t\t\t<md-list-item class="md-2-line md-long-text" ng-click="error.sendReport = 1" md-autofocus>\n\t\t        <ng-md-icon icon="error" size="24" style="fill: #0077CA;"></ng-md-icon>\n\t\t        <div class="md-list-item-text" layout="column">\n\t\t          <h3>Send an error report</h3>\n\t\t          <p>Help us help you by reporting this error to the UOIT Webteam.</p>\n\t\t        </div>\n\t\t\t\t\t</md-list-item>\n\t\t\t\t</md-list>\n\n      </md-tab>\n\n      <md-tab id="report" label="send report" layout-padding>\n\n      </md-tab>\n\n    </md-tabs>\n\n\t</md-dialog-content>\n\t<md-dialog-actions>\n\n\t\t<md-button ng-click="refreshApp()" class="md-primary md-raised">\n\t\t\tRefresh page\n\t\t</md-button>\n\n\t\t<md-button ng-click="closeDialog()" class="md-primary">\n\t\t\tClose and try again\n\t\t</md-button>\n\n\t</md-dialog-actions>\n</md-dialog>');
$templateCache.put('popup/login/_login.html','<md-dialog class="login-message">\n\t<md-dialog-content>\n\t\t<div layout="column" layout-padding>\n\t\t  <div layout="column" layout-align="center center" ng-if="!$ctrl.state.attempt">\n\t\t  \t<h2>Please sign in</h2>\n\t\t    <md-input-container class="md-icon-float md-icon-left md-block">\n\t\t      <label>User name</label>\n\t\t      <ng-md-icon icon="person_outline"></ng-md-icon>\n\t\t      <input ng-model="$ctrl.username"/>\n\t\t    </md-input-container>\n\n\t\t    <md-input-container class="md-icon-float md-icon-left md-block">\n\t\t      <label>Password</label>\n\t\t      <ng-md-icon icon="lock_outline"></ng-md-icon>\n\t\t      <input ng-model="$ctrl.password" type="password">\n\t\t    </md-input-container>\n\t\t    \n\t\t    <md-button class="md-raised md-primary" ng-click="$ctrl.login()">Sign in</md-button>\n\t\t  </div>\n\n\t\t  <div layout="column" layout-align="center center" ng-if="$ctrl.state.attempt && $ctrl.state.success">\n\t\t  \t<h2>Login success!</h2>\n\t\t  </div>\n\t\t  <div layout="column" layout-align="center center" ng-if="$ctrl.state.attempt && $ctrl.state.failed">\n\t\t  \t<h2>Login failure!</h2>\n\t\t  </div>\n\t\t</div>\n\t</md-dialog-content>\n<!-- \t<md-dialog-actions>\n\t\t<md-button ng-click="refreshApp()" class="md-primary md-raised">\n\t\t\tRefresh page\n\t\t</md-button>\n\t\t<md-button ng-click="closeDialog()" class="md-primary">\n\t\t\tClose and try again\n\t\t</md-button>\n\t</md-dialog-actions> -->\n</md-dialog>');
$templateCache.put('popup/welcome/_welcome-dialog.html','<md-dialog aria-label="Welcome to the UOIT Virtual Tour" class="welcome-dialog">\n  <form>\n    <md-toolbar>\n      <div class="md-toolbar-tools">\n\n        <h2>UOIT Virtual Tour</h2>\n        <span flex></span>\n        <md-button class="md-icon-button" ng-click="cancel()" aria-label="Close this window">\n        \t<ng-md-icon\n\t\t\t\t  \ticon="close"\n\t\t\t\t  \tstyle="fill: white;">\n\t\t\t\t  </ng-md-icon>\n        </md-button>\n\n      </div>\n    </md-toolbar>\n    <md-dialog-content>\n      <md-tabs\n      \tmd-dynamic-height\n      \tmd-border-bottom\n      \tmd-center-tabs>\n      \t<!-- md-stretch-tabs="always" -->\n\n        <md-tab label="Welcome">\n          <md-content class="md-padding">\n\n\t        \t<ng-md-icon\n\t        \t\tclass="dialog-icon compass-icon"\n\t\t\t\t\t  \ticon="explore"\n\t\t\t\t\t  \tsize="90"\n\t\t\t\t\t  \tstyle="fill: #0077CA;">\n\t\t\t\t\t  </ng-md-icon>\n            <h2 class="md-display-2">Welcome to the Virtual Tour!</h2>\n            <p class="md-headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate.</p>\n\n          </md-content>\n        </md-tab>\n\n        <md-tab label="Usage tips">\n          <md-content class="md-padding" layout="column">\n\t          <div>\n\t\t        \t<ng-md-icon\n\t\t        \t\tclass="dialog-icon tips-icon"\n\t\t\t\t\t\t  \ticon="live_help"\n\t\t\t\t\t\t  \tsize="90"\n\t\t\t\t\t\t  \tstyle="fill: #0077CA;">\n\t\t\t\t\t\t  </ng-md-icon>\n\t            <h2><span class="md-display-2">Tips</span><br/><span class="md-headline">for better usage</span></h2>\n            </div>\n            <div layout="row">\n\n            \t<md-list flex>\n\t\t\t\t        <md-subheader class="md-no-sticky">First steps</md-subheader>\n\t\t\t\t        <md-divider ></md-divider>\n\t\t\t\t        <md-list-item class="md-2-line md-long-text" ng-click="null" layout="row">\n\t\t\t\t\t        <ng-md-icon icon="my_location" size="24" style="fill: #0077CA;"></ng-md-icon>\n\t\t\t\t          <div class="md-list-item-text" layout="column">\n\t\t\t\t            <h3>Tour navigation</h3>\n\t\t\t\t            <p>Learn how to use warp arrows, map view and the location menu to move from scene to scene.</p>\n\t\t\t\t          </div>\n\t\t\t\t        </md-list-item>\n\t\t\t\t        <md-list-item class="md-2-line md-long-text" ng-click="null">\n\t\t\t\t\t        <ng-md-icon icon="place" size="24" style="fill: #0077CA;"></ng-md-icon>\n\t\t\t\t          <div class="md-list-item-text" layout="column">\n\t\t\t\t            <h3>Points of interest</h3>\n\t\t\t\t            <p>See which tour elements offer interactivity and how to use them.</p>\n\t\t\t\t          </div>\n\t\t\t\t        </md-list-item>\n\t\t\t\t      </md-list>\n\n            \t<md-list flex>\n\t\t\t\t        <md-subheader class="md-no-sticky">Digging deeper</md-subheader>\n\t\t\t\t        <md-divider ></md-divider>\n\t\t\t\t        <md-list-item class="md-2-line md-long-text" ng-click="null">\n\t\t\t\t\t        <ng-md-icon icon="3d_rotation" size="24" style="fill: #0077CA;"></ng-md-icon>\n\t\t\t\t          <div class="md-list-item-text" layout="column">\n\t\t\t\t            <h3>Virtual reality</h3>\n\t\t\t\t            <p>Experience the UOIT virtual tour immersively with an Oculus\xA9 Rift.</p>\n\t\t\t\t          </div>\n\t\t\t\t        </md-list-item>\n\t\t\t\t        <md-list-item class="md-2-line md-long-text" ng-click="null" layout="row">\n\t\t\t\t\t        <ng-md-icon icon="screen_rotation" size="24" style="fill: #0077CA;"></ng-md-icon>\n\t\t\t\t          <div class="md-list-item-text" layout="column">\n\t\t\t\t            <h3>Mobile VR</h3>\n\t\t\t\t            <p>Turn your smartphone into a portal to UOIT with a mobile VR peripheral like HTC Vive, Samsung Gear or Google Cardboard.</p>\n\t\t\t\t          </div>\n\t\t\t\t        </md-list-item>\n\t\t\t\t        <md-list-item class="md-2-line md-long-text" ng-click="null" layout="row">\n\t\t\t\t\t        <ng-md-icon icon="settings" size="24" style="fill: #0077CA;"></ng-md-icon>\n\t\t\t\t          <div class="md-list-item-text" layout="column">\n\t\t\t\t            <h3>Customization</h3>\n\t\t\t\t            <p>Learn about the options available for fine-tuning the virtual tour interface.</p>\n\t\t\t\t          </div>\n\t\t\t\t        </md-list-item>\n\t\t\t\t      </md-list>\n\n\t\t\t      </div>\n\n          </md-content>\n        </md-tab>\n\n        <md-tab label="Accessibility">\n          <md-content class="md-padding" layout="column">\n\t          <div>\n\t\t        \t<ng-md-icon\n\t\t        \t\tclass="dialog-icon access-icon"\n\t\t\t\t\t\t  \ticon="accessibility"\n\t\t\t\t\t\t  \tsize="90"\n\t\t\t\t\t\t  \tstyle="fill: #0077CA;">\n\t\t\t\t\t\t  </ng-md-icon>\n\t\t          <h2><span class="md-display-2">Accessibility</span><br/><span class="md-headline">information</span></h2>\n\t          </div>\n          </md-content>\n        </md-tab>\n\n      </md-tabs>\n    </md-dialog-content>\n    <md-dialog-actions layout="row" class="footer-pane">\n    \t<md-checkbox class="md-primary" aria-label="Permanently dismiss this dialog" md-autofocus ng-model="$root.appSettings.USER._SHOW_WELCOME.val" ng-true-value="false" ng-false-value="true" ng-change="syncUser()">\n        <strong>Don\'t show me this again</strong>\n      </md-checkbox>\n      <span flex></span>\n      <md-button class="md-raised md-primary" ng-click="startTour()">\n        Take an interactive tour\n      </md-button>\n      <md-button class="md-primary" ng-click="hide()" style="margin-right:20px;" >\n        No thanks\n      </md-button>\n    </md-dialog-actions>\n  </form>\n</md-dialog>');
$templateCache.put('sidebar/drilldown/_drilldown.html','<md-content\n\tclass="drilldown-menu"\n\tng-init="children = item.children">\n\t<div ng-if="!item.children.length" style="padding-right: 30px;" class="drilldown-content">\n\t\t<span class="md-title">No {{ ::item.nextLevel }}s found!<br/>\n\t\t<strong class="md-caption">&laquo; Back</strong></span>\n\t</div>\n</md-content>');
$templateCache.put('sidebar/search/_search.html','<md-content class="search-bar" layout="column" layout-fill>\n\n\t<div md-whiteframe="{{ whiteframeDp || 8 }}" ng-mouseenter="whiteframeDp = 16" ng-mouseleave="whiteframeDp = 8" class="floating-panel" layout="column" layout-align="center center" layout-margin flex="grow">\n    <label for="search_q">I\'m looking for things with</label>\n\t  <md-input-container md-no-float class="md-block md-icon-left">\n\t    <ng-md-icon icon="search" size="24"></ng-md-icon>\n\t    <input ng-model="$ctrl.query" aria-label="Search the Virtual Tour" id="search_q">\n\t  </md-input-container>\n\n    <label>within all</label>\n\t  <md-input-container>\n      <md-select ng-model="$ctrl.filters.in"\n      \tid="search_filter"\n\t\t\t\tmultiple>\n        <md-optgroup label="Search in">\n          <md-option ng-value="type.value" ng-repeat="type in ::[{label:\'Virtual tour\',value:\'tour\'},{label:\'Campus map\',value:\'map\'}]">{{type.label}}</md-option>\n        </md-optgroup>\n      </md-select>\n\t  </md-input-container>\n    <label>by their</label>\n\t  <md-input-container>\n        <md-select ng-model="$ctrl.filters.for"\n                   multiple>\n          <md-optgroup label="Virtual tour" ng-repeat="type in ::[{label:\'Tour scenes\',value:\'scenes\'},{label:\'Points of interest\',value:\'hotspots\'}]">\n            <md-option ng-value="type.value">{{type.label}}</md-option>\n          </md-optgroup>\n          <md-optgroup label="Campus map" ng-repeat="type in ::[{label:\'Map features\',value:\'features\'},{label:\'Feature collections\',value:\'collections\'}]">\n            <md-option ng-value="type.value">{{type.label}}</md-option>\n          </md-optgroup>\n        </md-select>\n\t  </md-input-container>\n  </div>\n\n\t<md-list flex="noshrink" class="search-results">\n\t\t<md-list-item ng-click="null">\n\t\t\tFun!\n\t\t</md-list-item>\n\t\t<md-divider></md-divider>\n\t\t<md-list-item ng-click="null">\n\t\t\tFun!\n\t\t</md-list-item>\n\t\t<md-divider></md-divider>\t\n\t</md-list>\n\t\n</md-content>');
$templateCache.put('sidebar/settings/_settings.html','<md-content layout="column" class="user-dashboard" layout-fill>\n\n<!-- \t<md-card flex="nogrow" id="user_dashboard">\n\t  <img ng-src="images/north_bg.jpg" class="md-card-image" alt="image caption">\n\n\t  <md-card-header layout-align="space-around center">\n\t    <md-card-avatar>\n\t      <img class="md-user-avatar" ng-src="{{ ::user.avatar.url }}">\n\t    </md-card-avatar>\n\t    <md-card-header-text>\n\t      <span class="md-headline">{{ ::user.name.first }} {{ ::user.name.last }}</span>\n\t      <span class="md-subhead">{{ ::user.bannerId }}</span>\n\t    </md-card-header-text>\n\t  </md-card-header>\n\n\t  <md-card-actions layout="row" layout-align="start center">\n\t    <md-button class="md-raised md-primary">Admin</md-button>\n\t    <md-button class="md-raised">Log out</md-button>\n\t    <md-card-icon-actions>\n\t      <md-button class="md-icon-button md-primary" aria-label="edit profile">\n\t        <ng-md-icon icon="edit"></ng-md-icon>\n\t      </md-button>\n\t    </md-card-icon-actions>\n\t  </md-card-actions>\n\n\t  <md-card-content>\n\t    <p class="md-subhead">\n\t     Card content\n\t    </p>\n\t  </md-card-content> -->\n\t\t<ng-include src="\'/dashboard\'" scope="this" onload=""></ng-include>\n\t<!-- </md-card> -->\n\n\t<md-card flex="nogrow" id="user_settings">\n  \t<v-accordion class="vAccordion--default" multiple flex>\n\t\t  <!-- add expanded attribute to open the section -->\n\t\t  <v-pane expanded>\n\t\t    <v-pane-header>\n  \t\t\t\tApp settings\n\t\t    </v-pane-header>\n\t\t    <v-pane-content>\n\t\t\t\t\t<md-list>\n\t\t\t\t\t  <md-list-item ng-repeat="(key, setting) in $ctrl.settings">\n\t\t\t\t\t    <ng-md-icon icon="{{::setting.icon}}" ng-attr-style="fill: {{ setting.val? \'#003c71\':\'#cccccc\'}}" flex="nogrow"></ng-md-icon>\n\t\t\t\t\t    <span flex>{{ ::setting.label }}</span>\n\t\t\t\t\t    <md-switch class="md-primary" ng-model="$ctrl.settings[key].val" ng-change="$ctrl.syncUser()" aria-label="{{ ::setting.label }}"></md-switch>\n\t\t\t\t\t  </md-list-item>\n\t\t\t\t\t</md-list>\n\t\t    </v-pane-content>\n\t\t  </v-pane>\n\n\t\t  <v-pane expanded>\n\t\t    <v-pane-header>\n\t\t      Data usage\n\t\t    </v-pane-header>\n\n\t\t    <v-pane-content>\n\t\t\t\t\t<!-- <div layout="row" layout-padding>\n\t\t\t\t\t\t<label class="text-center" ng-repeat="setting in $ctrl.usage" flex>\n\t\t\t\t\t\t\t{{ ::setting.label }}\n\t\t\t\t    \t<md-slider-container flex>\n\t\t\t\t\t      <h5>{{ ::setting.labels[1] }}</h5>\n\t\t\t\t\t      <md-slider ng-model="setting.val" step="{{::setting.step}}" min="{{::setting.min}}" max="{{::setting.max}}" aria-label="{{setting.label}}" class="md-primary" md-vertical md-discrete ng-change="$ctrl.syncData()"></md-slider>\n\t\t\t\t\t      <h5>{{ ::setting.labels[0] }}</h5>\n\t\t\t\t\t    </md-slider-container>\n\t\t\t\t\t\t</label>\n\t\t\t    </div> -->\n\t\t    \t<div layout="column" layout-padding>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<label ng-repeat="(key, setting) in $ctrl.usage" flex>\n\t\t\t\t\t    <md-checkbox ng-if="key === \'auto\'" class="md-primary" ng-model="setting.val" ng-change="$ctrl.syncData()" aria-label="Auto-detect optimum settings">\n\t\t            Auto-detect optimum settings\n\t\t          </md-checkbox>\n\t\t\t\t\t\t\t{{ ::setting.label }}\n\t\t\t\t    \t<md-slider-container flex ng-if="key !== \'auto\'" ng-disabled="$ctrl.usage.auto.val">\n\t\t\t\t\t      <h5>{{ ::setting.labels[1] }}</h5>\n\t\t\t\t\t      <md-slider ng-model="setting.val" step="{{::setting.step}}" min="{{::setting.min}}" max="{{::setting.max}}" aria-label="{{setting.label}}" class="md-primary" md-discrete ng-change="$ctrl.syncData()"></md-slider>\n\t\t\t\t\t      <h5>{{ ::setting.labels[0] }}</h5>\n\t\t\t\t\t    </md-slider-container>\n\t\t\t\t\t\t</label>\n\n\t\t\t    </div>\n\n\t\t    </v-pane-content>\n\t\t  </v-pane>\n\n\t\t</v-accordion>\n\t</md-card>\n</md-content>');}]);