var bio = {

    'name': 'Wataru Sekiguchi',
    'role': 'Front-end Developer',
    'contacts': {
        'mobile': '08012345678',
        'email': 'wataru.sekiguchi416@gmail.com',
        'github': 'watarumohawk',
        'twitter': '@watarumohawk',
        'location': 'Tokyo'
    },
    'location': 'Tokyo',
    'welcomeMessage': "Hi, I'm Wataru.",
    'skills': ['JavaScript', 'Python', 'Swift'],
    'biopic': 'images/fry.jpg'
};

var education = {

    'schools': [{
        'name': 'Nihon University',
        'location': 'Tokyo',
        'degree': 'Bachelor of Science',
        'majors': ['Physics'],
        'dates': '2012 - 2016',
        'url': 'http://www.nihon-u.ac.jp/intldiv/en/'
    }],
    'onlineCourses': [{
        'title': 'Front-end Web Developer',
        'school': 'Udacity',
        'dates': 'December, 2016 - Present',
        'url': 'https://udacity.com'
    }]
};

var work = {

    'jobs': [{
        'employer': 'Hays',
        'title': 'Google Analytics 360 Support Specialist - Onsite Consultant',
        'location': 'Tokyo',
        'dates': 'March 2016 to present',
        'description': 'Supported clients in Japan and South Korea.'
    }, {
        'employer': 'BRAVESOFT Inc.',
        'title': 'iOS Developer',
        'location': 'Tokyo',
        'dates': 'December 2015 to March 2016',
        'description': 'Created iOS app in Objective-C'
    }, {
        'employer': 'i3DESIGN Co., Ltd.',
        'title': 'Web Engineer',
        'location': 'Tokyo',
        'dates': 'May 2015 to December 2015',
        'description': 'Improved testing environment and conducted end-to-end testing for mobile sites.'
    }]
};

var projects = {

    'projects': [{
        'title': 'foobar',
        'dates': 'November 2016 to present',
        'description': "Solved secret programming problems.",
        'images': ['images/foobar.png']
    }, {
        'title': 'Google Analytics iOS sample App',
        'dates': 'October 2016 to present',
        'description': "How to use Web View with GTM and GA SDK",
        'images': ['http://lorempixel.com/400/200/business/']
    }, {
        'title': 'Learn Python the Hard Way',
        'dates': 'October 2016 to February 2017',
        'description': "Learned Python the hard way.",
        'images': ['http://lorempixel.com/400/200/technics/']
    }]
};


function replaceDummy(tag, string, data) {

    return tag.replace(string, data);

}


function appendContact(id, contact) {

    var tag = replaceDummy(HTMLcontactGeneric, '%contact%', contact);
    $(id).append(replaceDummy(tag, '%data%', bio.contacts[contact]));

}

bio.display = function(){

    $('#header')
        .prepend(replaceDummy(HTMLheaderRole, '%data%', bio.role))
        .prepend(replaceDummy(HTMLheaderName, '%data%', bio.name));

    // Contacts in header
    appendContact('#topContacts', 'mobile');
    appendContact('#topContacts', 'email');
    appendContact('#topContacts', 'github');
    appendContact('#topContacts', 'twitter');

    $('#header')
        .append(replaceDummy(HTMLbioPic, '%data%', bio.biopic))
        .append(replaceDummy(HTMLwelcomeMsg, '%data%', bio.welcomeMessage))
        .append(replaceDummy(HTMLskillsStart, '%data%', bio.skills));

    for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(replaceDummy(HTMLskills, '%data%', bio.skills[i]));
    }

    // Contacts in footer
    appendContact('#footerContacts', 'mobile');
    appendContact('#footerContacts', 'email');
    appendContact('#footerContacts', 'github');
    appendContact('#footerContacts', 'twitter');

}


work.display = function() {

    $('#workExperience').append(HTMLworkStart);

    for (var i = 0; i < work.jobs.length; i++) {

        var employer = replaceDummy(HTMLworkEmployer, '%data%', work.jobs[i].employer);
        var job_title = replaceDummy(HTMLworkTitle, '%data%', work.jobs[i].title);

        $('.work-entry')
            .append(employer + job_title)
            .append(replaceDummy(HTMLworkDates, '%data%', work.jobs[i].dates))
            .append(replaceDummy(HTMLworkLocation, '%data%', work.jobs[i].location))
            .append(replaceDummy(HTMLworkDescription, '%data%', work.jobs[i].description));

    }
}


projects.display = function() {

    $('#projects').append(HTMLprojectStart);

    for (var j = 0; j < projects.projects.length; j++) {

        $('.project-entry')
            .append(replaceDummy(HTMLprojectTitle, '%data%', projects.projects[j].title))
            .append(replaceDummy(HTMLprojectDates, '%data%', projects.projects[j].dates))
            .append(replaceDummy(HTMLprojectDescription, '%data%', projects.projects[j].description));

        img_path = projects.projects[j].images;

        for (var i = 0; i < img_path.length; i++) {
            $('.project-entry').append(replaceDummy(HTMLprojectImage, '%data%', img_path));
        }

    }
}


education.display = function() {

    // Offline
    $('#education').append(HTMLschoolStart);
 
    for (var i = 0; i < education.schools.length; i++){

        var school_name = replaceDummy(HTMLschoolName, '%data%', education.schools[i].name);
        var degree = replaceDummy(HTMLschoolDegree, '%data%', education.schools[i].degree);

        $('.education-entry:last')
            .append(school_name + degree)
            .append(replaceDummy(HTMLschoolDates, '%data%', education.schools[i].dates))
            .append(replaceDummy(HTMLschoolLocation, '%data%', education.schools[i].location))
            .append(replaceDummy(HTMLschoolMajor, '%data%', education.schools[i].majors));

    }

    // Online
    $('#education')
        .append(HTMLonlineClasses)
        .append(HTMLschoolStart);

    for (var j = 0; j < education.onlineCourses.length; j++) {

        var title = replaceDummy(HTMLonlineTitle, '%data%', education.onlineCourses[j].title);
        var school = replaceDummy(HTMLonlineSchool, '%data%', education.onlineCourses[j].school);

        $('.education-entry:last')
            .append(title + school)
            .append(replaceDummy(HTMLonlineDates, '%data%', education.onlineCourses[j].dates))
            .append(replaceDummy(HTMLonlineURL, '%data%', education.onlineCourses[j].url));

    }

}


function displayMap() {

    $('#mapDiv').append(googleMap);
    $('#map').append(internationalizeButton);

}


bio.display();
work.display();
projects.display();
education.display();
displayMap();
