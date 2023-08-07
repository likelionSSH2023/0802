import { useEffect, useState } from "react";
import axios from "../../api/axios";
import MovieModal from "../MovieModal/MovieModal";
import { RowContainer, RowPosters, RowPoster, RowTitle } from "./Styled";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Row({ isLarge, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };
  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    // console.log(request);

    setMovies(request.data.results);
  };

  return (
    <>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
      <RowContainer>
        <RowTitle>{title}</RowTitle>
        <Swiper
          slidesPerView={5}
          spaceBetween={50}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          // pagination={{ clickable: true }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <RowPoster
                islarge={isLarge ? "true" : "false"}
                src={`https://image.tmdb.org/t/p/original/${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </RowContainer>
    </>
  );
}
