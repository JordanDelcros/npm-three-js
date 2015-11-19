(function( self ){

	var THREE = require("./three.js");

	module.exports = function( includes ){

		if( includes instanceof Array ){

			for( var include = 0, length = includes.length; include < length; include++ ){

				require("./includes/" + includes[include] + ".js")(THREE);

			};

		};

		return THREE;

	};

})(this || {});