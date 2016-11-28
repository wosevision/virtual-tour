function sceneLink($state, SceneResource) {
  'ngInject';
  return {
    restrict: 'A',
    scope: {
    	sceneLink: '='
    },
    require: '^aframeScene',
    templateUrl: 'aframe/scenelink/_scenelink.html',
		link(scope, elem, attrs, SceneCtrl) {
			//
			// Listen for clicks on scene link element
			const elemClick =  event => {
				// If there's a right click active...
				if (SceneCtrl._rightClick && SceneCtrl._editable) {
					// ...open the scene link editor:
					SceneCtrl.openEditor(SceneCtrl._rightClick, { sceneLink: scope.sceneLink })
				} else {
					// ...otherwise just use the default scene link behavior
					const sceneId = scope.sceneLink.scene;
					const gotoSceneHandler = data => {
						document.getElementById(`link_${sceneId}`).emit('goto');
						$state.go('scene', { building: data.parent.code, scene: data.code });
					}
					SceneResource.get({ id: sceneId }).$promise.then(gotoSceneHandler);
				}
			};
			elem.on('click', elemClick);
			//
			// Scope cleanup on $destroy
			scope.$on('$destroy', () => {
				elem.off('click');
			});
			//
    }
	  //
  };
}

export default {
  name: 'sceneLink',
  fn: sceneLink
};