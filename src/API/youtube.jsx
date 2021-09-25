import axios from 'axios';

const KEY = "AIzaSyBuPRQn7uLQDjni-o6dOS3e2doWLT--_iE";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 6,
        key: KEY 
    }
});

