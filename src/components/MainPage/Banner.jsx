import { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import {
  BannerContainer,
  BannerContents,
  BannerTitle,
  BannerButton,
  BannerPlay,
  BannerInfo,
  BannerDes,
  BannerFadeBottom,
  BannerPlayContainer,
  BannerIframe,
} from "./Styled";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchMovie();
  }, []);

  //비동기함수
  const fetchMovie = async () => {
    // 현재 상영 영화 정보 url인 fetchNowPlaying에 Get을 요청해 받아온 값을 request에 저장
    const request = await axios.get(requests.fetchNowPlaying);

    //랜덤숫자 선정
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    //무비 디테일에 에이피아이 요청 params를 이용해 비디오를 추가요청
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    // console.log(movieDetail);
    setMovie(movieDetail);
  };

  const turncate = (str, n) => {
    //옵셔널 체이닝 : 아 구글링~ (변수, state 비어있는경우, method를 쓸 일이 있으면 )
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const [isClicked, setIsClicked] = useState(false);

  if (!isClicked) {
    return (
      <BannerContainer
        movie={movie.backdrop_path}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        }}
      >
        <BannerContents>
          <BannerTitle>
            {turncate(movie.title || movie.name || movie.original_name, 15)}
          </BannerTitle>
          <BannerButton>
            <BannerPlay
              onClick={() => {
                if (isClicked) {
                  setIsClicked(false);
                } else {
                  setIsClicked(true);
                }
              }}
            >
              Play
            </BannerPlay>
            <BannerInfo>More Information</BannerInfo>
          </BannerButton>
          <BannerDes>{movie.overview}</BannerDes>
        </BannerContents>
        <BannerFadeBottom />
      </BannerContainer>
    );
  } else {
    return (
      <BannerPlayContainer>
        <BannerIframe
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=&autoplay=1&mute=1&playlist=${movie.videos.results[0].key}`}
          title="YouTube video player"
          frameborder="0"
          allow=" autoplay; fullscreen"
          allowFullScreen
        />
      </BannerPlayContainer>
    );
  }
}
