class Github {
    constructor() {
        this.client_id = "366dcd34830ac5313632";
        this.client_secret = "cc41b340e0950c577dad4e78eed56a9a730c6956";
    }

    getUser(name) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`, {
                method: "GET"
            })
                .then(data => data.json())
                .then(userDate => resolve(userDate))
                .catch(reason => reject(reason));
        });
    }

    getUserRepos(user){
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${user.login}/repos?per_page=${5}&sort=${'created:asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`, {
                method: "GET"
            })
                .then(data => data.json())
                .then(userDate => resolve(userDate))
                .catch(reason => reject(reason));
        });
    }
}