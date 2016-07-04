import angular from 'angular'; export default angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("buttonbar/_buttonbar.html","<aside flex layout=\"column\" class=\"button-bar\" md-whiteframe=\"2\" show-gt-sm ng-if=\"toolbar.isOpen&&!landscapeMobile\">\n	<div flex flex-grow ng-repeat=\"(v,view) in ::menuViews\">\n	  <md-button ng-click=\"toggleMenu(\'right\', v)\" layout-fill>\n	  	<ng-md-icon icon=\"{{ ::view.icon }}\" style=\"fill: #ffffff;\"></ng-md-icon>\n	    {{ ::view.label }}\n	    <md-tooltip md-direction=\"left\" md-autohide ng-if=\"!(mobile||!appSettings._USER.__SHOW_TOOLTIPS.val)\">\n	      {{ ::view.desc }}\n	    </md-tooltip>\n	  </md-button>\n  </div>\n</aside>");
$templateCache.put("scene/_scene.html","<section class=\"scene-view\" ui-view=\"sceneView\" ng-class=\"{ \'toolbar-open\' : toolbar.isOpen&&!landscapeMobile }\">\n</section>");
$templateCache.put("sidebar/_sidebar.html","<md-sidenav\n  class=\"md-sidenav-right\"\n  md-component-id=\"right\"\n  md-whiteframe=\"4\"\n  flex>\n  <div ui-view=\"sidebarView\" layout-fill></div>\n</md-sidenav>\n\n<md-sidenav\n  class=\"md-sidenav-left\"\n  md-component-id=\"config\"\n  md-disable-backdrop\n  md-whiteframe=\"4\">\n  <ng-include src=\"\'sidebar/builder/_builder.html\'\"></ng-include>\n</md-sidenav>");
$templateCache.put("titlebar/_titlebar.html","<!-- <md-progress-linear md-mode=\"determinate\" class=\"md-hue-3\" ng-if=\"mobile!=\'landscape\'\"></md-progress-linear> -->\n\n<md-toolbar class=\"md-accent md-hue-1 title-bar\" layout=\"row\" ng-if=\"mobile!=\'landscape\'\"> <!-- hide show-gt-sm -->\n\n    <md-toolbar-filler layout layout-align=\"left center\">\n      <img ng-src=\"https://shared.uoit.ca/global/files/img/logos/UOIT_blue_shield.png\" alt=\"University of Ontario Institute of Technology\" class=\"logo-shield\">\n    </md-toolbar-filler>\n\n    <div class=\"md-toolbar-tools\">\n      <h1>UOIT Virtual Tour</h1>\n\n      <span flex></span>\n\n<!--       <md-button ng-click=\"gotoScene()\">\n        Switcheroo!\n      </md-button> -->\n\n      <md-button ng-click=\"toggleMenu(\'config\')\" ng-class=\"{ \'active\': !isMenuOpen(\'config\') }\">\n        <span hide show-gt-xs>{{ isMenuOpen(\'config\') ? \'Disable\' : \'Enable\' }} editor</span>\n        <ng-md-icon icon=\"edit\" style=\"fill: #003c71;\" hide-gt-xs></ng-md-icon>\n        <md-tooltip md-direction=\"bottom\" md-autohide md-delay=\"1000\" ng-if=\"!(mobile||!appSettings._USER.__SHOW_TOOLTIPS.val)\">\n          Toggle the scene builder\n        </md-tooltip>\n\n      </md-button>\n      \n      <md-button ng-click=\"toolbar.toggle()\" ng-class=\"{ \'active\': !toolbar.isOpen }\">\n        <span hide show-gt-xs>{{ toolbar.isOpen ? \'Hide\' : \'Show\' }} toolbar</span>\n        <ng-md-icon icon=\"menu\" style=\"fill: #003c71;\" hide-gt-xs></ng-md-icon>\n        <md-tooltip md-direction=\"bottom\" md-autohide md-delay=\"1000\" ng-if=\"!(mobile||!appSettings._USER.__SHOW_TOOLTIPS.val)\">\n          Toggle list of Virtual Tour locations\n        </md-tooltip>\n      </md-button>\n    </div>\n\n</md-toolbar>");
$templateCache.put("sidebar/builder/_builder.html","  <md-toolbar class=\"md-theme-primary\">\n    <div class=\"md-toolbar-tools\">\n<!--       <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n        <md-icon md-svg-icon=\"img/icons/menu.svg\"></md-icon>\n      </md-button> -->\n      <h2>\n        <span>Builder</span>\n      </h2>\n      <span flex></span>\n      <md-button class=\"md-icon-button\" aria-label=\"More\">\n        <ng-md-icon icon=\"code\" style=\"fill: #FFF\" size=\"20\"></ng-md-icon>\n      </md-button>\n    </div>\n  </md-toolbar>\n\n  <md-content ng-controller=\"builderCtrl as bc\" layout=\"column\" flex>\n\n    <div ui-tree style=\"text-align: right;position: relative;height:calc(100vh - 128px);\">\n\n<!--       <md-fab-toolbar md-open=\"false\" count=\"0\"\n          md-direction=\"right\">\n        <md-fab-trigger class=\"align-with-text\">\n          <md-button aria-label=\"menu\" class=\"md-fab md-primary\">\n            <ng-md-icon icon=\"cloud_upload\" style=\"fill: white\" size=\"30\"></ng-md-icon>\n          </md-button>\n        </md-fab-trigger>\n        <md-toolbar>\n          <md-fab-actions class=\"md-toolbar-tools\">\n            <md-button aria-label=\"comment\" ng-click=\"bc.expandAll\">\n              Expand all\n            </md-button>\n            <md-button aria-label=\"label\" ng-click=\"bc.collapseAll\">\n              Collapse all\n            </md-button>\n          </md-fab-actions>\n        </md-toolbar>\n      </md-fab-toolbar>\n\n      <h2 style=\"position:absolute;height:56px;line-height:36px;top:0;right:5px;\">Node tree</h2> -->\n      <ul ui-tree-nodes=\"\" ng-model=\"scene.entities\" id=\"tree-root\">\n        <li ng-repeat=\"entity in scene.entities\" ui-tree-node ng-include=\"\'sidebar/builder/_builder_detail.html\'\" ng-init=\"nodeIndex = $index\">\n        </li>\n      </ul>\n    </div>\n  </md-content>\n</md-sidenav>\n<!-- \n<div class=\"debug-container\" ng-if=\"isOpenConfig()\">\n\n  <pre pretty-json=\"mc.entities\"  />\n</div> -->");
$templateCache.put("sidebar/builder/_builder_detail.html","<div ui-tree-handle>\n  <label class=\"uppercase\" style=\"line-height: 16px;\"><ng-md-icon icon=\"code\" style=\"fill: #0077CA\" size=\"16\"></ng-md-icon> {{ entity.type ? entity.type : \'entity\' }}</label>\n\n  <!-- <span style=\"font-size: 10px\">{{ $modelValue }}</span> -->\n<!-- \n  <div ng-repeat=\"attr in entity.attrs\">\n\n    <div ng-if=\"attr.val | isArray\" layout ng-repeat=\"val in attr.val track by $index\">\n      <md-slider-container flex-grow layout>\n        <md-input-container>\n        <label>{{ attr.prop }}</label>\n          <input string-to-number type=\"number\" min=\"0\" max=\"10\" step=\"0.1\" flex ng-model=\"val\" aria-label=\"{{ attr.prop }}\" aria-controls=\"{{entity.type ? entity.type : \'entity\'}}{{nodeIndex}}_{{attr.prop}}-{{$index}}\">\n        </md-input-container>\n        <md-slider string-to-number flex=\"grow\" min=\"0\" max=\"10\" step=\"0.1\" ng-model=\"val\" aria-label=\"red\" id=\"{{entity.type ? entity.type : \'entity\'}}{{nodeIndex}}_{{attr.prop}}-{{$index}}\" class=\"md-primary\" md-discrete ng-change=\"bc.update(this, $modelValue, attr.prop, $index)\">\n        </md-slider>\n      </md-slider-container>\n    </div>\n\n    <span ng-if=\"attr.val || \'\' | isString\" layout>\n      <md-menu layout flex=\"10\">\n        <md-button aria-label=\"Add new attribute\" data-nodrag class=\"md-icon-button md-primary\" ng-click=\"bc.openMenu($mdOpenMenu, $event)\">\n          <ng-md-icon icon=\"add_circle_outline\" style=\"fill: #0077CA\" size=\"20\"></ng-md-icon>\n          <md-tooltip>Add a new attribute to this node</md-tooltip>\n        </md-button>\n        <md-menu-content width=\"3\">\n          <md-menu-item>\n            <md-menu>\n              <md-button ng-click=\"bc.openMenu($mdOpenMenu, $event)\">New</md-button>\n              <md-menu-content width=\"5\">\n                <md-menu-item>Node</md-menu-item>\n                <md-menu-item>Copy node</md-menu-item>\n                <md-menu-item>Child node</md-menu-item>\n                <md-menu-item>Copy child node</md-menu-item>\n              </md-menu-content>\n          </md-menu-item>\n          <md-menu-divider></md-menu-divider>\n          <md-menu-item ng-repeat=\"options in bc.menuOptions\">\n	          <md-menu>\n	            <md-button ng-click=\"bc.openMenu($mdOpenMenu, $event)\">\n	              {{ options.category }}\n	            </md-button>\n	            <md-menu-content width=\"5\">\n	            	<md-menu-item ng-repeat=\"prop in options.props\">\n                  <label ng-if=\"!prop.name\" class=\"md-body-2 uoitlightblue\">{{ prop }}</label>\n                  <md-menu-divider ng-if=\"!prop.name\"></md-menu-divider>\n	            		<md-button ng-click=\"\" ng-if=\"prop.name\">{{ prop.name }}<small class=\"badge text-right\"><em>Default:</em> {{ prop.default }}</small></md-button>\n	            	</md-menu-item>\n	            </md-menu-content>\n	          </md-menu>\n          </md-menu-item>\n\n        </md-menu-content>\n      </md-menu>\n\n      <md-menu layout flex=\"10\">\n	      <md-button aria-label=\"Add new attribute\" data-nodrag class=\"md-icon-button md-primary\" ng-click=\"bc.openMenu($mdOpenMenu, $event)\">\n	        <ng-md-icon icon=\"remove_circle_outline\" style=\"fill: red\" size=\"20\"></ng-md-icon>\n          <md-tooltip>Remove this node</md-tooltip>\n	      </md-button>\n        <md-menu-content>\n        </md-menu-content>\n	    </md-menu>\n\n      <md-input-container layout flex-grow>\n        <label>Property</label>\n        <input flex ng-model=\"attr.prop\" required>\n      </md-input-container>\n      <md-input-container>\n        <label>Value</label>\n        <input flex ng-model=\"attr.val\">\n      </md-input-container>\n    </span>\n    \n  </div>\n -->\n</div>\n\n<ul ui-tree-nodes=\"\" ng-model=\"entity.entities\">\n  <li ng-repeat=\"entity in entity.entities\" ui-tree-node ng-include=\"\'sidebar/builder/_builder_detail.html\'\" ng-init=\"nodeIndex = $index\">\n  </li>\n</ul>");
$templateCache.put("sidebar/location/_location-detail.html","<md-content class=\"location-detail\" layout-fill>\n  <md-toolbar class=\"md-tall md-primary md-hue-3\" ng-style=\"{ \'background-image\' : \'url(images/panoramas/\' + location.code + \'/thumb.png)\' }\">\n    <span flex></span>\n    <div class=\"md-toolbar-tools md-toolbar-tools-bottom\">\n      <md-button class=\"md-icon-button\" aria-label=\"Back to locations\" ui-sref=\"location\">\n        <ng-md-icon icon=\"chevron_left\" style=\"fill: #0077ca;\"></ng-md-icon>\n        <md-tooltip md-direction=\"left\" md-autohide md-delay=\"1000\" ng-if=\"!(mobile||!appSettings._USER.__SHOW_TOOLTIPS.val)\">\n        	Go back to location list\n      	</md-tooltip>\n      </md-button>\n      <h2 flex layout layout-align=\"end\">{{ location.label }}</h2>\n    </div>\n  </md-toolbar>\n  <md-list layout-padding>\n\n    <md-list-item class=\"secondary-button\" ng-repeat=\"scene in location.scenes\" ng-click=\"gotoScene(location.code, scene.code)\">\n      <p>{{::scene.name}}</p>\n      <ng-md-icon icon=\"chevron_right\"></ng-md-icon>\n    </md-list-item>\n    \n  </md-list>\n</md-content>");
$templateCache.put("sidebar/location/_location.html","\n\n<!--               \n  <section layout-padding>\n    <form>\n      <md-input-container>\n        <label for=\"testInput\">Location search</label>\n        <input type=\"text\" id=\"testInput\"\n               ng-model=\"data\" md-autofocus>\n      </md-input-container>\n    </form>\n  </section>\n-->\n\n<md-tabs md-border-bottom layout-fill class=\"md-primary md-hue-3\">\n\n  <md-tab>\n    <md-tab-label>\n    	<!-- <ng-md-icon icon=\"panorama_horizontal\" style=\"fill: white\"></ng-md-icon> -->\n    	<div>North location</div>\n      <md-tooltip md-direction=\"bottom\" md-autohide md-delay=\"1000\" ng-if=\"!(mobile||!appSettings._USER.__SHOW_TOOLTIPS.val)\">\n        View tours of 2000 Simcoe St North Oshawa location\n      </md-tooltip>\n    </md-tab-label>\n    <md-tab-body>\n\n      <md-toolbar md-scroll-shrink ng-if=\"true\" class=\"md-primary\">\n        <div class=\"md-toolbar-tools\">\n          <h2 flex>2000 Simcoe St North Oshawa</h2>\n        </div>\n      </md-toolbar>\n\n      <md-content style=\"height: calc(100vh - 178px);\">\n        <section ng-repeat=\"(header,data) in Location.North\">\n          <md-subheader class=\"md-primary\">{{::header}}</md-subheader>\n          <md-list layout-padding>\n\n            <md-list-item class=\"secondary-button\" ng-repeat=\"location in data\" ng-click=\"Location.showDetail(location, $event)\">\n              <p>{{::location.name}}</p>\n              <!-- <md-button class=\"md-primary\"> --><ng-md-icon icon=\"chevron_right\"></ng-md-icon><!-- </md-button> -->\n            </md-list-item>\n\n          </md-list>\n        </section>\n      </md-content>\n\n    </md-tab-body>\n  </md-tab>\n\n  <md-tab>\n    <md-tab-label>\n    	<!-- <ng-md-icon icon=\"3d_rotation\" style=\"fill: white\"></ng-md-icon> -->\n    	<div>Downtown location</div>\n      <md-tooltip md-direction=\"bottom\" md-autohide md-delay=\"1000\" ng-if=\"!(mobile||!appSettings._USER.__SHOW_TOOLTIPS.val)\">\n        View tours of the downtown Oshawa locations\n      </md-tooltip>\n    </md-tab-label>\n    <md-tab-body>\n\n      <md-toolbar md-scroll-shrink ng-if=\"true\" class=\"md-primary\">\n        <div class=\"md-toolbar-tools\">\n          <h2 flex>Downtown Oshawa</h2>\n        </div>\n      </md-toolbar>\n\n      <md-content style=\"height: calc(100vh - 178px);\">\n        <section ng-repeat=\"(header,data) in Location.Downtown\">\n          <md-subheader class=\"md-primary\">{{::header}}</md-subheader>\n          <md-list layout-padding>\n\n            <md-list-item class=\"secondary-button\" ng-repeat=\"location in data\" ng-click=\"Location.showDetail(location, $event)\">\n              <p>{{::location.name}}</p>\n              <ng-md-icon icon=\"chevron_right\"></ng-md-icon>\n            </md-list-item>\n            \n          </md-list>\n        </section>\n      </md-content>\n\n    </md-tab-body>\n  </md-tab>\n\n</md-tabs>");
$templateCache.put("sidebar/settings/_settings.html","<md-list>\n  <md-subheader class=\"md-no-sticky\">Interface settings</md-subheader>\n  <md-list-item ng-repeat=\"setting in appSettings._USER\">\n    <!-- <md-icon md-svg-icon=\"{{::setting.icon}}\"></md-icon> -->\n    <ng-md-icon icon=\"{{::setting.icon}}\" ng-attr-style=\"fill: {{ setting.val? \'#003c71\':\'#cccccc\'}}\"></ng-md-icon>\n    <p> &nbsp;{{ ::setting.label }} </p>\n    <md-switch class=\"md-primary\" ng-model=\"setting.val\" ng-change=\"syncSettings()\"></md-switch>\n  </md-list-item>\n</md-list>");}]);