import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;

export default function Root(props) {
  return (
    <Container>
      <h2>Pagina independiente de muestra para la review</h2>
      <h3>Esta pagina esta subida a la plataforma de github,
        cualquier cambio en esta no afecta al resto del sitio.
      </h3>
    </Container>
  );
}
