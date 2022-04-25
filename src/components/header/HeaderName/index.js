import { Title } from "./style";

export function HeaderName({title}) {
  return (
    <Title>{title || "Cursos"}</Title>
  );
}