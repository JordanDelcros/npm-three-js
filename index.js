(function( self ){

	var THREE = require("./three.js");

	module.exports = function( addons ){

		if( addons instanceof Array ){

			for( var addon = 0, length = addons.length; addon < length; addon++ ){
				
				var additive = addons[addon];
				
				if (additive instanceof Function) {
					additive(THREE);
				}

				else if (typeof additive === "string") {
					require("./addons/" + additive + ".js")(THREE);
				}
				
				else {
					throw new Error("Invalid module type provided");
				}
				
			};

		};

		return THREE;

	};

})(this || {});
