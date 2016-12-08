(function(){
	var pattern = function(){
		var string ="/^[a-z A-Z]{1,225}$/";
		var number = "/^[0-9]{1,225}$/";
		return {
			string:function(){
				return string;
			},
			number: function(){
				return number;
			}

			
		}
	}
	angular.module('pattern',[]).service('pattern', pattern);
})();