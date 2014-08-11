require.config({
	base: 'js',
	paths: {
		leaflet: '../leaflet/leaflet-src'
	},
	shim: {
		leaflet: {
			exports: 'L'
		}
	}
});

require([
	'FaultMap'
], function (
	FaultMap
) {
	'use strict';

	var GEO = 'http://geohazards.usgs.gov/ArcGIS/rest/services';

	new FaultMap({
		faultLayerUrl: GEO + '/hazfaults2002/MapServer/tile/{z}/{y}/{x}',
		faultLayerOpts: {
			attribution: '<a href="http://pubs.er.usgs.gov/publication/ofr02420">USGS</a>'
		},
		faultInfoUrl: GEO + '/hazfaults2002/MapServer/identify'
	});
});