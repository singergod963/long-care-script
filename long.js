var courses = [10000024,10000018,10000019,10000016,10000017,10000013,10000014,10000015,10000012,10000020,10000022,10000008,10000009,10000010,10000011,10000066,10000067,10000065,10000061,10000062,10000064,10000063,10000068];
var now = 0;
var repeatTime = 1000 * 60 * 4.1;
setInterval(function() {
	if(now >= courses.length){
		now = 0
	}else{
		now++;
	}
	changeCourse(now);
}, repeatTime);

function changeCourse(index) {
	chgCourse(courses[index],1,1);
	console.log('change course',courses[index], new Date());
}

changeCourse(0);