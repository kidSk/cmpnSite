/**
* cmpnApp Module
*
* Configuraçao do tema, icons e paletes de cor
*/
angular.module('cmpnApp') .config(function($mdThemingProvider) {
	var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
		'contrastDefaultColor': 'light',
		'contrastDarkColors': ['50'],
		'50': 'ffffff'
	});
	$mdThemingProvider.definePalette('customBlue', customBlueMap);
	$mdThemingProvider.theme('default')
	.primaryPalette('customBlue', {
		'default': '500',
		'hue-1': '50'
	})
	.accentPalette('blue')
	.warnPalette('red');
	$mdThemingProvider.theme('input', 'default')
	.primaryPalette('grey')

})