(function(api){
	// Interfaces
	Ti._5.EventDriven(api);

	// Properties
	Ti._5.prop(api, 'MODE_APPEND');

	Ti._5.prop(api, 'MODE_READ');

	Ti._5.prop(api, 'MODE_WRITE');

	Ti._5.prop(api, 'applicationDataDirectory', "/");

	Ti._5.prop(api, 'applicationDirectory', "/");

	Ti._5.prop(api, 'lineEnding');

	Ti._5.prop(api, 'resourcesDirectory', "/");

	Ti._5.prop(api, 'separator', "/");

	Ti._5.prop(api, 'tempDirectory');

	// Methods
	api.createFile = function(){
		console.debug('Method "Titanium.Filesystem.createFile" is not implemented yet.');
	};
	api.createTempDirectory = function(){
		console.debug('Method "Titanium.Filesystem.createTempDirectory" is not implemented yet.');
	};
	api.createTempFile = function(){
		console.debug('Method "Titanium.Filesystem.createTempFile" is not implemented yet.');
	};
	api.getFile = function(){
		console.debug('Method "Titanium.Filesystem.getFile" is not implemented yet.');
		return new Ti.Filesystem.File;
	};
	api.isExternalStoragePresent = function(){
		console.debug('Method "Titanium.Filesystem.isExternalStoragePresent" is not implemented yet.');
	};
})(Ti._5.createClass('Titanium.Filesystem'));