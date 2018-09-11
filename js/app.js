const inputText = document.querySelector("#searchUser");
let gitHub = new Github();
let ui = new UI();


inputText.addEventListener("keyup", function () {
    const nowText = inputText.value;

    if (nowText !== '') {
        gitHub.getUser(nowText)
            .then(user => {
                if (user.message === "Not Found") {
                    ui.showAlert(`User : ${nowText} not found`, "alert alert-danger m-2");
                    ui.clearProfile();
                } else {
                    ui.showProf(user);
                }
                return user;
            })
            .then(user => gitHub.getUserRepos(user)) // instead bind function for context
            .then(repos => ui.showRepos(repos))
            .catch(reason => console.log(reason));


    } else {
        ui.clearProfile();
    }
});