
import styled from 'styled-components'

const Titulo = styled.h1`
  color: ${({ theme }) => theme.text };
  padding: 25px 0;
`
export default Titulo;

//  quando damos esse styled ponto, temos acesso à todos os tags HTMLs disponíveis para estilizar.