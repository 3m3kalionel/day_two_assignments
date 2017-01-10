module.exports = {
	reverseString: function(str) {
	    var a = '';
	    if (str == '') {return null}
	    else {

		    for (i = 0; i < str.length; i++) {
		        
		        a = str[i] + a;
		    }
		}
	    if (a === str) {
	    	return true;
	    }
	    return a;
	}
}