import { forEach } from 'angular';

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

class DrilldownCtrl {
	constructor($scope, $state) {
		'ngInject';
		// save a reference to the $scope
		this.$scope = $scope;

		// this.$scope.toggle = ($event, code, nextLevel) => {
		this.$scope.toggle = ($event, $sc) => {
			// console.log(this.$sc, $sc);
			// prevent click from bubbling up
			$event.stopPropagation();

			// if clicked item is inactive...
			if (!$sc.item.active) {
				// ...then go up a level, run toggleItem() on every item
				// ...using the clicked item as the context of 'this'
				forEach($sc.$parent.children, toggleItem, $sc.item);
			} else {
				// ...otherwise, go up a level and deactivateItem() all
				forEach($sc.$parent.children, deactivateItem);
			}

			// $state.go(nextLevel, { [nextLevel]: code });
			$state.go(this.nextLevel, { [this.nextLevel]: $sc.item.code });

			// run callback
			// if (this.onToggle && typeof this.onToggle === 'function') {
			// 	this.onToggle()($ev, $sc);
			// }

		}

	}
}

DrilldownCtrl.$inject = ['$scope', '$state']

export default {
  name: 'DrilldownCtrl',
  fn: DrilldownCtrl
};
