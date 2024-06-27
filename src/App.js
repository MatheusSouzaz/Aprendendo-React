
import Paragraph from './components/paragrafo/paragrafo';
import ButtonLabel from './components/alertButton/Button';
import Container from './components/container/container'


function App() {
  return (
    <Container>
    <Paragraph>
      esse é um parágrafo
    </Paragraph>
    <ButtonLabel label='Baixar CV'/>
    </Container>
  );
}

export default App;
