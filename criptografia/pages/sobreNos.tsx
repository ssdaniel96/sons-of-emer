import Header from "./header";
import LeftProfile from "./leftProfile";
import RightProfile from "./rightProfile";

export default function sobreNos() {
  return (
    <>
      <Header content="Sobre Nós" />

      <LeftProfile name="Emerson Ricardo Monteiro" curse="Engenharia da Computação | 9º Semestre" img="Emerson.jpeg" />
      <RightProfile name="Richard Baldin" curse="Engenharia da Computação | 9º Semestre" img="Richard.jpeg" />
      <LeftProfile name="Daniel Soares" curse="Engenharia da Computação | 9º Semestre" img="DanielSoares.jpeg" />
      <RightProfile name="Daniel Feitosa" curse="Engenharia da Computação | 9º Semestre" img="DanielFeitosa.jpeg" />
      <LeftProfile name="Nickolas Sponton" curse="Engenharia da Computação | 3º Semestre" img="Nickolas.jpeg" />
      <RightProfile name="Eric Azevedo de Oliveira " curse="Sistemas de Informação | 5º Semestre " img="Eric.jpeg" />
      <LeftProfile name="Breno Roela Barbosa" curse="Engenharia da Computação | 3º Semestre" img="Breno.jpeg" />
      <RightProfile name="Erick de Freitas Furtado" curse="Sistemas de Informação | 7º Semestre " img="Erick.jpeg" />
      <LeftProfile name="Laís Gonçalves de Melo" curse="Engenharia da Computação | 1º Semestre" img="Lais.jpeg" />
      <RightProfile name="Rafael Roela Barbosa" curse="Engenharia da Computação | 1º Semestre" img="Rafael.jpeg" />

    </>
  );
}
