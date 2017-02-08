/*
This is empty on purpose! Your code to build the resume will go here.
*/

// Creating object that will populate the content
var bio = {
    "name": "José Coto",
    "role": "Data Analyst",
    "contacts": {
        "mobile": "+49 176 276987",
        "email": "jcoto.contact@gmail.com",
        "github": "jlcoto",
        "twitter": "@jcoto",
        "location": "Berlin, Germany",
        "blog": "http://jose-coto.com/",
    },
    "welcomeMessage": "I am passionate about discovering new patterns in data. My background in quantitative social sciences gives me an edge when it comes to analyzing customer behavior at the social and individual levels. I love using visualizations to support data driven decision making.",
    "skills": ["Data Analysis", "Data Visualization", "Python", "Pandas", "D3.js", "GeoPandas", "JavaScript"],
    "biopic": "images/jose_coto.png",
};

var work = {
    "jobs": [{
            "title": "Data Analyst",
            "employer": "Freelance",
            "dates": "March 2015 - Currently",
            "location": "Berlin, Germany",
            "description":
                "• Support clients during the analysis cycle: helping them formulating clear questions, identifying data sources, and communicating the results in a comprehensible manner.;• Perform careful data collection and merging from different sources (web scraping, official records, surveys).;• Present results according to original plan schedule, making sure clients understand the benefits and limitations of the analysis."
        },
        {
            "title": "Quantitative Methods Lecturer",
            "employer": "Universidad Antonio Ruiz de Montoya",
            "dates": "August 2015 - December 2015",
            "location": "Lima, Peru",
            "description": "• Taught introductory probability and statistics seminar to university students: developed curricula, slides and materials for the course.;• Taught an introductory Python and web scraping workshop for social sciences students.;• Developed a Jupyter Notebook for each session with explanations and exercises and a web page to follow students’ progress (Spanish). (http://jose-coto.com/taller_python/).;• Sparked students’ enthusiasm for data analysis, and encouraged them to use learned skills in their research projects."
        }
    ]
};

var education = {
    "schools": [{
            "name": "Washington University in St. Louis",
            "location": "St. Louis, Missouri, USA",
            "degree": "Ph.D. Political Science (non-completed)",
            "majors": ["None"],
            "dates": "2014-2015",
            "url": "https://wustl.edu/",
            "coursework": ["Mathematical Methods", "Statistics"]
        },
        {
            "name": "University of Essex",
            "location": "Colchester, Essex, United Kingdom",
            "degree": "MSc. Political Economy",
            "dates": "2012-2013",
            "majors": ["None"],
            "url": "http://www.essex.ac.uk/",
            "coursework": ["Mathematical Methods", "Econometrics"]

        },
        {
            "name": "Pontificia Universidad Católica del Perú",
            "location": "Lima, Peru",
            "degree": "Law",
            "dates": "2002-2008",
            "majors": ["None"],
            "url": "http://www.pucp.edu.pe/",
            "coursework": ["Competition Law",
                "Mathematics for Economists"]
        }
    ],
    "onlineCourses": [{
        "title": "Data Analyst Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com",
        "coursework": ["Exploratory Analysis",
            "Introduction to Machine Learning", "A/B testing"]
    }]
};

var projects = {
    "projects": [{
            "title": "Visualizing Earthquakes",
            "dates": "2016",
            "description": "• Developed visualization where users can fully interact with geographical and temporal features of earthquakes.; • Successfully integrated D3.js and Leaflet to produce animations and transitions.;• Project featured by Data Science Weekly.",
            "images": ["images/earthquake_project-normal.png"],
            "skills": ["Data Visualization", "D3.js", "JavaScript",
                "Leaflet", "GeoPandas", "Pandas", "Python"
            ],
            "link": "https://github.com/jlcoto/Udacity/tree/master/earthquake_visualization"
        },
        {
            "title": "Exploring Data - Earthquake consequences",
            "dates": "2016",
            "description": "• Cleaned, merged and analyzed data on consequences of earthquake in the world from the 1900s.;• Created a notebook with clear steps for getting, cleaning and merging data from different sources. Created a codebook with all the variables included in final dataset.;• Created more than 20 visualizations to understand the data. Analyzed the conditional relationships of deaths and earthquakes given its magnitude and regime type/gdp per capita.",
            "images": ["images/earthquake_damage-normal.png"],
            "skills": ["Data Analysis", "R", "R Studio", "ggplot",
                "Python", "pandas", "GeoPandas"
            ],
            "link": "https://github.com/jlcoto/Udacity/tree/master/earthquake_project"
        },
        {
            "title": "Wrangling Data - Open Street Maps",
            "dates": "2016",
            "description": "• Parsed 140 Mb XML document to obtain relevant data.;• Cleaned, audited and corrected more than 2500 registries.;• Stored cleaned data in a SQL database, performed queries and generated plots.;• Created map plots to inspect georeferenced data.",
            "images": ["images/wrangling_data-normal.png"],
            "skills": ["Data Analysis", "Python", "SQL", "XML parsing",
                "regular expressions", "Pandas", "BaseMap",
                "GeoPandas"
            ],
            "link": "https://github.com/jlcoto/Udacity/tree/master/data_wrangling/Open_Street_project/Open_street_lima_project"
        },
        {
            "title": "A/B test analysis",
            "dates": "2016",
            "description":  "• Analyzed an experiment run by Udacity, a leading education company, to study students’ commitment.;• Chose metrics and unit of diversion relevant to the experiment. Proposed and tested hypothesis.;• Analyzed and discussed results. Proposed follow-up experiment.",
            "images": ["images/a_b_testing-normal.png"],
            "skills": ["Data Analysis", "Pandas", "Jupyter Notebook",
                "Matplotlib"
            ],
            "link": "https://github.com/jlcoto/Udacity/tree/master/a_b_testing"
        },
        {
            "title": "Analyzing Enron's Fraud with Machine Learning",
            "dates": "2016",
            "description": "• Identified which Enron employees are more likely to have committed fraud using machine learning and public Enron financial and email data.;• Trained and tested different algorithms and used feature selection techniques.;• Tunned algorithms’ parameters to improve original results.",
            "images": ["images/machine_learning-normal.png"],
            "skills": ["Python", "Scikit-learn", "Pandas",
                "machine learning"
            ],
            "link": "https://github.com/jlcoto/Udacity/tree/master/machine_learning_project"
        }
    ]
};

var data = "%data%";

//Replacing and including elements of biography
bio.display = function() {
    //Displays bio content

    //Define variables to replace and select values
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMssg);
    var formattedNumber = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedMail = HTMLemail.replace(data, bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

    //Attaching previous defined values to document
    $(".name-position").prepend(formattedRole);
    $(".name-position").prepend(formattedName);
    $(".message").append(formattedWelcome);
    $(".pic").append(formattedPic);
    $("#topContacts, #footerContacts").append(formattedNumber, formattedMail, formattedTwitter, formattedGitHub, formattedBlog, formattedLocation);
    $("#projects .row").append(
        '<ul id="proj-skills" class="flex-box col-md-11 col-md-offset-1"></ul>'
    );
    $(".skill-list").append(HTMLskillsStart);

    //Inserting skills to the page iteratively
    if (bio.skills.length > 0) {
        bio.skills.forEach(function(skill) {
            var skillFormat = '<button class="skill-bttn">' + skill +
                '</button>';
            var formattedSkill = HTMLskills.replace(data,
                skillFormat);
            $("#skills").append(formattedSkill);
            $("#proj-skills").append(formattedSkill);
        });
    }

    //Adding All button to the porject's page
    var addAll = '<button class="skill-bttn">All</button>';
    var formattedAll = HTMLskills.replace(data, addAll);
    $("#proj-skills").append(formattedAll);
};



work.display = function() {
    // Displays work content

    //Iterating each job to add items
    work.jobs.forEach(function(jobs) {
        //Attaching overall job section
        $("#workExperience").append(HTMLworkStart);

        //Adding values to each section
        var formattedEmployer = HTMLworkEmployer.replace(data,
            jobs.employer);
        var formattedTitle = HTMLworkTitle.replace(data, jobs.title);
        var formattedWorkDates = HTMLworkDates.replace(data,
            jobs.dates);
        var formattedWorkLocation = HTMLworkLocation.replace(
            data, jobs.location);
        var formattedEmployerTitle = formattedEmployer +
            formattedTitle;

        //Populating with previously included values
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        jobs.description.split(";").forEach(function(description) {
            var fomattedWorkDescription =
                HTMLworkDescription.replace(data,
                    description);
            $(".work-entry:last").append(
                fomattedWorkDescription);
        });
    });
};

projects.display = function(projects) {
    //Displays projects content

    //Including project for a 2 column grid
    projects.projects.forEach(function(project, index) {
        //Makes sure that new row will be included once two elements have been attached
        if (index % 2 === 0) {
            $("#projects").append(
                '<div class="row project-list"></div>');
        }
        $("#projects .row.project-list").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace(
            data, project.title);
        var formattedProjectDate = HTMLprojectDates.replace(
            data, project.dates);
        var formattedProjectSkills = HTMLprojectSkills.replace(
            data, project.skills.join(', '));

        //Attach values to the page
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last a").attr('href', project.link);
        $(".project-entry:last").append(formattedProjectDate);

        //Adding images iteratively
        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace(data, image);
            $(".project-entry:last").append(formattedProjectImage);
        });
        // Splitting strings in ; and adding one line per description.
        project.description.split(";").forEach(function(description) {
            var fomattedProjectDescription =
                HTMLprojectDescription.replace(data,
                    description);
            $(".project-entry:last").append(
                fomattedProjectDescription);
        });
        $(".project-entry:last").append(formattedProjectSkills);

    });
};

education.display = function() {
    // Displays education content
    education.schools.forEach(function(school) {
        //Adding overall education section
        $("#education").append(HTMLschoolStart);

        // Changing values of elements iteratively
        var fomattedSchoolName = HTMLschoolName.replace(data,
            school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace(
            data, school.degree);
        var formattedSchoolDate = HTMLschoolDates.replace(data,
            school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace(
            data, school.location);
        var formattedSchoolCourses = HTMLschoolCourses.replace(
            data, school.coursework.join(", "));
        var formattedSchoolTitle = fomattedSchoolName +
            formattedSchoolDegree;

        //Adding values to the page
        $(".education-entry:last").append(formattedSchoolTitle);
        $(".education-entry:last").append(formattedSchoolDate);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolCourses);
    });

    //Adding online education section
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLonlineStart);

        //Changing values iteratively
        var formattedOnlineTitle = HTMLonlineTitle.replace(data,
            course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace(
            data, course.school);
        var formattedOnlineSchoolTitle = formattedOnlineTitle +
            formattedOnlineSchool;
        var formattedOnlineDate = HTMLonlineDates.replace(data,
            course.dates);
        var formattedOnlinePage = HTMLonlineURL.replace(data,
            course.url);
        var formattedOnlineCourses = HTMLonlineCourses.replace(
            data, course.coursework.join(", "));

        //Attaching values to the page.
        $(".online-entry:last").append(formattedOnlineSchoolTitle);
        $(".online-entry:last").append(formattedOnlineDate);
        $(".online-entry:last").append(formattedOnlinePage);
        $(".online-entry a").attr("href", course.url);
        $(".online-entry:last").append(formattedOnlineCourses);
    });

};

//Calling created functions to populate content

bio.display();

work.display();

projects.display(projects);

education.display();

//Calling map (see helper.js where function is defined)
$("#mapDiv").append(googleMap);

// Jquery events
// This parts modifies projects according to skills selected
// When a skill is selected it looks within skills
// of each project and shows the ones that correspond to that skill
// also colors the button differently to see what skills are active.

$("button").on('click', function() {
    //Place window in projects section
    window.location = '#projects';
    event.stopPropagation();
    $this = $(this);
    //Get of button that was clicked
    var skilledCLicked = $this.text();
    // Colors buttons when click / unclick
    $("button").each(function() {
        if ($(this).text() !== skilledCLicked) {
            $(this).css({
                "color": "#868889",
                "border-color": "#868889"
            });
        } else {
            $(this).css({
                "color": "#62b0c6",
                "border-color": "#62b0c6"
            });
        }
    });

    //Displays projects that match what was clicked
    // Adds transitions
    if (skilledCLicked === "All") {
        $(".project-entry").animate({
            top: "+=1000px"
        }, 1500);
        $(".row.project-list").fadeOut(1000, function() {
            $(".row.project-list").remove();
            projects.display(projects);
        });
    } else {
        var projectsToDisplay = {};
        projectsToDisplay.projects = [];
        projects.projects.forEach(function(project) {
            if (project.skills.includes(skilledCLicked)) {
                projectsToDisplay.projects.push(project);
            }
        });
        $(".project-entry").animate({
            top: "+=1000px"
        }, 1500);
        $(".row.project-list").fadeOut(1000, function() {
            $(".row.project-list").remove();
            projects.display(projectsToDisplay);
        });
    }
});