import { forEach } from 'angular';

function selectItem(item) {
	item.selected = (item === this);
}

function deactivateItem(item) {
	// make item inactive but unhide (default state)
	item.active = item.hidden = false;

	// if the item has children...
	if (item.children) {
		// recursively deactivate its children as well
		forEach(item.children, deactivateItem);
	}
}

function toggleItem(item) {
	// compare the current iterated item to 'this'
	// make the item active and unhide if same
	// make the item inactive and hide if not
	item.active = (item === this);
	item.hidden = !(item === this);

	// if the item is NOW inactive and has children...
	if (!item.active && item.children) {
		// ...then deactivateItem() all its children
		forEach(item.children, deactivateItem);
	}
}

class DrilldownController {
	constructor($scope, $element, $compile, $state, $analytics) {
		'ngInject';
		// save a reference to the $scope
		this.$scope = $scope;
		this.$state = $state;
		this.$element = $element;
		this.$compile = $compile;
		this.$analytics = $analytics;
	}
	$onInit() {
		// this.$scope.toggle = ($event, code, nextLevel) => {
		this.$scope.toggle = ($event, $sc) => {
			// prevent click from bubbling up
			$event.stopPropagation();
			// only open drilldown if final level not reached
			if (this.nextLevel !== 'scene') {
				// if clicked item is inactive...
				if (!$sc.item.active) {
					// ...then go up a level, run toggleItem() on every item
					// ...using the clicked item as the context of 'this'
					forEach($sc.$parent.children, toggleItem, $sc.item);
				} else {
					// ...otherwise, go up a level and deactivateItem() all
					forEach($sc.$parent.children, deactivateItem);
				}
			} else {
				forEach($sc.$parent.children, selectItem, $sc.item);
			}
			// go to state based on nextLevel prop and item code
			this.$analytics.eventTrack('click', { category: 'drilldown', label: [$sc.$parent.code, $sc.item.code].join('_') });
			this.$state.go(this.nextLevel, { [this.nextLevel]: $sc.item.code });
		}

		const $content = this.$element.find('md-content')[0];
		this.children.forEach((item, index) => {
			const childScope = this.$scope.$new();
			childScope.item = item;
			this.$compile(`<div
				class="drilldown-item"
				ng-class="{ 'is-active': item.active, 'is-hidden': item.hidden }"
				md-ink-ripple="{{ item.active ? false : '#003C71' }}"
				ng-click="toggle($event, this)"
				md-autofocus="${ index === 0 }">
				<div ng-if="!item.hidden" style="padding-right: 30px;" class="drilldown-content" ng-class="{'md-caption': item.active, 'md-title': !item.active, 'selected': item.selected }">
					<span>{{ ::item.name }}</span>
					<div class="open-indicator"></div>
				</div>
				<ui-view ng-if="item.active" />
			</div>`)(childScope, (clone, scope) => {
				$content.append(clone[0]);
			})
		});
	}
}


export default DrilldownController;
