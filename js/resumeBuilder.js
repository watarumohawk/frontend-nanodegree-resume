
var bio = {

    'name': 'Wataru Sekiguchi',
    'role': 'Front-end Developer',
    'contacts': {
        'mobile': '08012345678',
        'email': 'wataru.sekiguchi416@gmail.com',
        'github': 'watarumohawk',
        'twitter': '@watarumohawk',
    },
    'location': 'Tokyo',
    'welcomeMessage': "Hi, I'm Wataru.",
    'skills': ['JavaScript', 'Python', 'Swift'],
    'biopic': 'images/fry.jpg'
};

var education = {

    'schools': [
        {
            'name': 'Nihon University',
            'location': 'Tokyo',
            'degree': 'Bachelor of Science',
            'majors': ['Physics'],
            'dates': '2012 - 2016'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Front-end Web Developer',
            'school': 'Udacity',
            'dates': 'December, 2016 - Present'
        }
    ]
};


var work = {

    'jobs': [
        {
            'employer': 'Hays',
            'title': 'Technical Solutions Specialist',
            'location': 'Tokyo',
            'dates': 'March 2016 to present',
            'description': 'I support clients in Japan and South Korea.'
        }
    ]
};

var projects = {

    'projects': [
        {
            'title': 'foobar',
            'dates': 'November 2016 to present',
            'description': "Solved secret programming problems.",
            'images': ['images/foobar.png']
        }
    ]
};

function replaceDummy(tag, string, data) {

    return tag.replace(string, data)

};

function displayHeader() {

    $('#header')
        .prepend(replaceDummy(HTMLheaderRole, '%data%', bio['role']))
        .prepend(replaceDummy(HTMLheaderName, '%data%', bio['name']));

    for (var contact in bio['contacts']) {
        var contact_tag = replaceDummy(HTMLcontactGeneric, '%contact%', contact)
        $("#topContacts").append(replaceDummy(contact_tag, '%data%', bio.contacts[contact]));
    }

    $('#header')
        .append(replaceDummy(HTMLbioPic, '%data%', bio['biopic']))
        .append(replaceDummy(HTMLwelcomeMsg, '%data%', bio['welcomeMessage']))
        .append(replaceDummy(HTMLskillsStart, '%data%', bio['skills']));


    for (var i = 0; i < bio['skills'].length; i++) {
        $("#skills").append(replaceDummy(HTMLskills, '%data%', bio['skills'][i]));
    }

};


function displayWork() {

    $('#workExperience').append(HTMLworkStart);

    var employer = replaceDummy(HTMLworkEmployer, '%data%', work['jobs'][0]['employer'])
    var job_title = replaceDummy(HTMLworkTitle, '%data%', work['jobs'][0]['title'])

    $('.work-entry')
        .append(employer + job_title)
        .append(replaceDummy(HTMLworkDates, '%data%', work['jobs'][0]['dates']))
        .append(replaceDummy(HTMLworkLocation, '%data%', work['jobs'][0]['location']))
        .append(replaceDummy(HTMLworkDescription, '%data%', work['jobs'][0]['description']));

};

function displayProjects() {

    $('#projects').append(HTMLprojectStart);

    $('.project-entry')
        .append(replaceDummy(HTMLprojectTitle, '%data%', projects['projects'][0]['title']))
        .append(replaceDummy(HTMLprojectDates, '%data%', projects['projects'][0]['dates']))
        .append(replaceDummy(HTMLprojectDescription, '%data%', projects['projects'][0]['description']))
        .append(replaceDummy(HTMLprojectImage, '%data%', projects['projects'][0]['images'][0]));

};

function displayEducation() {

    $('#education').append(HTMLschoolStart);

    var school_name = replaceDummy(HTMLschoolName, '%data%', education['schools'][0]['name']);
    var degree = replaceDummy(HTMLschoolDegree, '%data%', education['schools'][0]['degree'])

    $('.education-entry')
        .append(school_name + degree)
        .append(replaceDummy(HTMLschoolDates, '%data%', education['schools'][0]['dates']))
        .append(replaceDummy(HTMLschoolLocation, '%data%', education['schools'][0]['location']))
        .append(replaceDummy(HTMLschoolMajor, '%data%', education['schools'][0]['majors']));

    $('#education').append(HTMLonlineClasses)

    var online_title = replaceDummy(HTMLonlineTitle, '%data%', education['onlineCourses'][0]['onlineCourses']);
    var online_school = replaceDummy(HTMLonlineSchool, '%data%', education['onlineCourses'][0]['school']);

};

function displayFooter() {

    for (var contact in bio['contacts']) {
        var contact_tag = replaceDummy(HTMLcontactGeneric, '%contact%', contact)
        $('#footerContacts').append(replaceDummy(contact_tag, '%data%', bio.contacts[contact]));
    }

};




displayHeader();
displayWork();
displayProjects();
displayEducation();
displayFooter();



