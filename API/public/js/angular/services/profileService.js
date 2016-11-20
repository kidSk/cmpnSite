/*(function(){

	function profile() {
		var roles = [];

		return {
			setRoles: setRoles,
			isSocial: isSocial,
			isAssembleia: isAssembleia,
			
		};

		function setRoles(roles) {
			this.roles = roles;
		}

		function isSocial() {
			return contains(this.roles, 'social');
		}
		function isAssembleia() {
			return contains(this.roles, 'assembleia');
		}
		function contains(array, element) {
			return array && array.indexOf(element) > -1;
		}

		
	}

	angular.module('cmpnAuthService').factory('profile',profile);

})();

*/
