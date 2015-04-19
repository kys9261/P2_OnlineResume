
var bio = {
	"name" : "Yongseong Kim",
	"role" : "Sunmoon Univ. Student",
	"contacts" : {
		"mobile" : "+82 10-9926-5673",
		"email" : "nser789@gmail.com",
		"github" : "kys9261",
		"facebook" : "uabout",
		"location" : "Seoul, South Korea"
	},
	"welcomeMessage" : "Hi Hello Nice too neet you",
	"skills" : ["Java","Android", "HTML/CSS/JavaScript", "Ruby", "C++"],
	"biopic" : "images/kim.jpg",
}

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLfacebook.replace("%data%",bio.contacts.github);
	var formattedFacebook = HTMLgithub.replace("%data%",bio.contacts.facebook);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkillsStart = HTMLskillsStart;
    var formattedSkills = HTMLskills;

	$("#header").prepend(formattedName+formattedRole);
	$("#topContacts").append(formattedMobile+formattedEmail+formattedGithub+formattedFacebook+formattedLocation );
    $("#header").append(formattedPic+formattedWelcomeMsg);
    $("#header").append(formattedSkillsStart);
    for(var skill in bio.skills){
    	$('#skills').append(HTMLskills.replace("%data%",bio.skills[skill]));
    }
}

var education = {
	"schools" : [{
		"name" : "Sunmoon University",
		"location" : "Asan, South Korea",
		"degree" : "bachelor",
		"majors" : "Computer Engineering",
		"dates" : 2016,
		"url" : "http://tulip.sunmoon.ac.kr/english/main.do"
	}],
	"onlineCourses" : [{

	}]
}

education.display = function(){
	for(var school in education.schools){
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		
		$('.education-entry:last').append(formattedSchoolName+formattedSchoolDegree+formattedSchoolDates+formattedSchoolLocation+formattedSchoolMajor);
	}
}


var work = {
	"jobs" : [{
		"employer" : "YEA Studio",
		"title" : "Developer Internship",
		"location" : "Seoul, South Korea",
		"dates" : "June, 2014 ~ August, 2014",
		"description" : "Developed mobile(iOS, Android) game for children using Cocos2d-x.",
		"url" : "http://www.yeastudio.kr/"
	},{
		"employer" : "Wednestorm",
		"title" : "CEO, Co-Founder",
		"location" : "Seoul, South Korea",
		"dates" : "September, 2013 ~ February, 2014",
		"description" : "Developed Android mobile game and management.",
		"url" : "#"
	}]
}

work.display = function(){
	for(var job in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		formattedWorkEmployer = formattedWorkEmployer.replace("#",work.jobs[job].url);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$('.work-entry:last').append(formattedWorkEmployer+formattedWorkTitle+formattedWorkDates+formattedWorkLocation+formattedWorkDescription);
	}
}


var projects = {
	"projects" : [{
		"title" : "T-Academy, Android App Project",
		"dates" : "March, 2014 ~ May, 2014",
		"description" : "Developed Book recommand application.",
		"images" : []
	}]
}

projects.display = function(){
	for(var project in projects.projects){
		$('#projects').append(HTMLprojectStart);
		var formattedProjTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedProjDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedProjDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		
		for(var img in projects.projects[project].images){
			formattedProjImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
			$('.project-entry').append(formattedProjImage);	
		}
		
		$('.project-entry').append(formattedProjTitle+formattedProjDates+formattedProjDescription);
	}
}


$("#main").append(internationalizeButton);
var name = bio.name;
function inName(loc_name) {
	var int_name = loc_name.split(" ");
	int_name[1] = int_name[1].toUpperCase();
	int_name[0] = int_name[0].slice(0, 1).toUpperCase() +
		int_name[0].slice(1).toLowerCase();
	return int_name[0] + " " + int_name[1];
}

$('#mapDiv').append(googleMap);
initializeMap();

bio.display();
education.display();
work.display();
projects.display();

/*
work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.

projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.

bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.

education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
*/