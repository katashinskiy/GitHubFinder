class UI {
    constructor() {
        this.profile = document.getElementById("profile");
        this.searchContainer = document.querySelector(".searchContainer");
    }

    showProf(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">Profile</a>
                    </div>
                    <div class="col-md-9">
                        <div class="user-info-header">
                            <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
                            <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
                            <span class="badge badge-success">Followers: ${user.followers}</span>
                            <span class="badge badge-info">Following: ${user.following}</span>
                        </div>
                        <div class="list-group">
                            <div class="list-group-item">Company: ${user.company ? user.company : 'None information'}</div>
                            <div class="list-group-item">WebSite/Blog: ${user.blog ? user.blog : 'None information'}</div>
                            <div class="list-group-item">Location: ${user.location ? user.location : 'None information'}</div>
                            <div class="list-group-item">Member Sines: ${user.created_at ? user.created_at : 'None information'}</div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="page-hading mb-3">Latest Repos</h3>
            <div id="repos"></div>

        `;
    }

    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row"> 
                        <div class="col md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                    </div>
                </div>
            `
        });

        document.getElementById("repos").innerHTML = output;
    }

    showAlert(message, ClassName) {
        this.clearAlert();

        const alert = `<div class="${ClassName}">${message}</div>`;

        this.searchContainer.insertAdjacentHTML('afterbegin', alert);

        setTimeout(() => this.clearAlert(), 3000);
    }

    clearAlert() {
        let alert = document.querySelector(".alert");

        if (alert) {
            alert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}

