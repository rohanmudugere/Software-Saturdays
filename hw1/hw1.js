let me = {
    name: "Rohan Mudugere",
    school: "Purdue University",
    year: "Junior",
    major: "Computer Engineering",
    home: "Dallas, TX"
};

function fillIntro() {
    let tag = document.getElementById("introduction");
    tag.innerHTML = "Hello, my name is " + me.name + ". " + "I am a " + me.year + " studying " + me.major + " at " + me.school + 
                    " and am from " + me.home +"!";
}
