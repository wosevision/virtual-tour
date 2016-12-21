import { forEach } from 'angular';

class ButtonbarCtrl {
	constructor($scope, $state, $mdSidenav, UserSession) {
		'ngInject';
		this.$scope = $scope;
		this.$state = $state;
		this.$mdSidenav = $mdSidenav;
  	this.showHints = () => UserSession.settings.showHints.val;
	}

  toggleMenu(navID, view) {
  	console.log(navID, view, this.items);
    if (view && !this.items[view].show) {
    	this.$state.go(view);
      
      forEach(
      	this.items,
      	(val, key) => val.show = (key == view)
      );
      
      if (!this.menuOpen) {
        this.$mdSidenav(navID).open();
      }
    } else {
      this.$mdSidenav(navID)
        .toggle();
    }
  }

  $onInit() {
		this.$scope.$watch(
			() => this.$mdSidenav('right').isOpen(),
			(newVal) => {
				this.menuOpen = newVal;
			}
		);
  }

}

// ButtonbarCtrl.$inject = ['$scope', '$state', '$mdSidenav'];

export default {
  name: 'ButtonbarCtrl',
  fn: ButtonbarCtrl
};
