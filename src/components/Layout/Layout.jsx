import Nav from "./Nav"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0;
`

export const Layout = () => {
    return(
      <Container>
        <Nav />
        <Outlet />
        <Footer />
      </Container>
    )
  }