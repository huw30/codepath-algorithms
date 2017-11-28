module.exports = { 
	//param A : integer
	//return a strings
	countAndSay : function(A){
        if (A === 1) {
            return "1";
        }
        return this.count(this.countAndSay(A-1));
	},
	count: function(strNum) {
        var say = "";
        var count = 1;
        for (var i=0; i < strNum.length; i++) {
            if (strNum[i+1] === strNum[i]) {
                count++;
            } else {
                say = say + count + "" + strNum[i];
                count = 1;
            }
        }
        return say;
    }
};
