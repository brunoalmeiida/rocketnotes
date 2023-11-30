import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles"

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/brunoalmeiida.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Bruno Almeida</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
