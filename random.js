
var Random = function() {

	var alpha = 'abcdefghijklmnopqrstuvwxyz', num = '0123456789';

	// http://jsfromhell.com/array/shuffle
	var shuffle = function(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};

	var repeat = function(input, multiplier) {
		return new Array(multiplier + 1).join(input);
	};

	var rand = function(length, pool) {
		var arr = shuffle(repeat(pool, 5).split(''));

		return arr.slice(0, length).join('');
	};

	return {
		'alpha': function(length) {
			return rand(length, alpha);
		},
		'alnum': function(length) {
			return rand(length, alpha + num);
		},
		'num': function(length) {
			return rand(length, num);
		}
	};

}();
