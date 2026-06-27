function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Student Logged In");
            resolve();
        }, 1000);
    });
}

function getProfile() {
    return new prompt((resolve, reject) => {
        setTimeout(() => {
            console.log("Profile Fetched");
            resolve()
        }, 1000);
    })
}

function getCourse() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Course Details Fetched");
            callback({ assignmentId: 901 });
        }, 1000);
    });
}

function getAssignment(id, callback) {
    setTimeout(() => {
        console.log("Assignment Fetched");
        callback();
    }, 1000);
}

login((student) => {
    getProfile(student.id, (profile) => {
        getCourse(profile.courseId, (course) => {
            getAssignment(course.assignmentId, () => {
                console.log("All Data Loaded");
            });
        });
    });
});