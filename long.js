var courses = [10000066,10000067,10000065,10000061,10000062,10000064,10000063];
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
