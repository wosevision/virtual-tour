import { isArray, isObject } from 'angular';

import { SkyService } from '../sky/sky.service';

/**
 * The scene service class is the lead orchestrator of the `<aframe-scene/>`
 * component's business logic. It is the application and component's main
 * interface to the current scene data.
 *
 * Scene manipulation is accomplished using the `$aframeScene.scene` getter
 * and setter property; internally, the scene data is stored in the service
 * "raw" under the property `sceneData`. The getter and setter are
 * responsible for transliterating changes into the "raw" data object and
 * back again. The setter also sets the `SkyService.sky` property, thus kicking
 * off a sky change from its respective service.
 *
 * @param {object} SkyService			 The sky service
 */
export class SceneService {
  private sceneData;

  public lastPublished;

	constructor(
    private SkyService: SkyService
  ) {
		'ngInject';
	}
	/**
	 * Getter and setter pair for internal scene data.
	 * 
	 * @param  {[Object]} sceneData Incoming scene data to set
	 * @return {[Object]}						The scene's current data
	 * @example
	 * {
	 *   _id: '583f17cfd2cd0c0400072d9c',
	 *   parent: '57a8e38b12ad99fe889c95f3',
	 *   code: '2b',
	 *   name: 'Atrium 2B',
	 *   hotSpots: [ ... ],
	 *   sceneLinks: [ ... ],
	 *   panorama: { ... }
	 * }
	 */
	get scene() {
		if (this.sceneData) {
			return this.sceneData;
		}
	}
	set scene(sceneData) {
		if (sceneData && isObject(sceneData)) {
			this.SkyService.sky = sceneData.panorama;
			this.sceneData = this.lastPublished = sceneData; // { _id, sceneLinks, hotSpots, sky };
		}
	}
}