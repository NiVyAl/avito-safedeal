import axios from 'axios';

class ApiService {
    addComment(data) {
        return axios.post("https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments", data)
    }

    getImages() {
        return axios.get("https://boiling-refuge-66454.herokuapp.com/images")
    }

}

export default new ApiService();