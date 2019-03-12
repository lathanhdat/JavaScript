var i;
var total = 0;
const argc = process.argv.slice(2);
argc.forEach((val,index) => {
	total += Number(val);
});
console.log(total);
