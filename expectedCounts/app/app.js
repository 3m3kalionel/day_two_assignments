module.exports = {
	words: function(str){
		var myObject = {};
		var i, sorted;
		//using reg ex
		sorted = str.replace(/\s{1,}\b/, " ");
		var splitString = sorted.split(" ");

		for (i = 0; i < splitString.length; i++){
			if (typeof myObject[splitString[i]] === 'number'){
				myObject[splitString[i]]++;
			}
			else{
				myObject[splitString[i]] = 1;
			}
		}

		return myObject;
	}
}
