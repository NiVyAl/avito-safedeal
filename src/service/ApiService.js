import axios from 'axios';

class ApiService {
    constructor() {
        this.url = "https://boiling-refuge-66454.herokuapp.com/images/";
    }

    addComment(data, id) {
        return axios.post(this.url + id + "/comments", data)
    }

    getImages(imageId) {
        let id = "";
        if (imageId) {
            id = imageId
        }
        return axios.get(this.url + id)
    }

}

export default new ApiService();