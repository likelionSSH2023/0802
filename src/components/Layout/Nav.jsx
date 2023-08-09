import React, { useEffect, useRef, useState } from "react";
import { Container, LogoImg, NavInput, UserImg } from "./Styled.jsx";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [searchValue, setsearchValue] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setsearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const [show, setShow] = useState(false);
  const nav = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    nav.current.style.backgroundColor = show ? "black" : "";
  }, [show]);

  return (
    <Container ref={nav}>
      <LogoImg
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
      />
      <NavInput
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder="영화제목을 입력하세요"
      />
      <UserImg
        alt="User logged"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
      />
    </Container>
  );
}
