var courses = [10000067,10000064];
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
