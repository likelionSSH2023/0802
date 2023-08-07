import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: import.meta.env.VITE_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance; //이 파일 밖에서도 사용가능하게 함
