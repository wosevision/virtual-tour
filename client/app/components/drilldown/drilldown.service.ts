import { Inject, Injectable } from 'ng-metadata/core';

import { TourResourceService } from '../../common/resource/tour-resource.service';

@Injectable()
export class DrilldownService {
	structure: vt.IDrilldownItem[] | Promise<vt.IDrilldownItem[]>;

	constructor(
		private TourResourceService: TourResourceService,
	) { }

	getLocations(): Promise<vt.IDrilldownItem[]> {
		return this.TourResourceService.location.query().$promise;
	}

	getBuildings(parent): Promise<vt.IDrilldownItem[]> {
		return this.TourResourceService.building.query({
			filter: { parent }
		}).$promise;
	}

	getScenes(parent): Promise<vt.IDrilldownItem[]> {
		return this.TourResourceService.scene.query({
			filter: { parent }
		}).$promise;
	}

	async getDrilldown(): Promise<vt.IDrilldownItem[]> {

		if (this.structure) return this.structure;

		this.structure = await this.getLocations();
		this.structure.forEach(async location => {

			location._params = { location: location.code };
			location._level = 'location';
			location.children = await this.getBuildings(location._id);
			location.children.forEach(async building => {

				building._params = { location: location.code, building: building.code };
				building._level = 'building';
				building.children = await this.getScenes(building._id);
				building.children.forEach(async scene => {

					scene._params = { location: location.code, building: building.code, scene: scene.code };
					scene._level = 'scene';
				});
			});
		});

		return this.structure;
	}
}