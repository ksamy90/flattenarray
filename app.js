// FLATTENING AN ARRAY

function flatten(){
	var a = [ [1,2,3], [4,5,6], [7,8,9] ];
	var b = [].concat.apply([],a);
	return b;
}

flatten();