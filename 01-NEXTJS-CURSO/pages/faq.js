import Link from "../src/components/Link";
import LinkStyle from "../src/components/LinkEstilizado";

export default function FAQPage() {
  return (<div>
    <h1>Aluar Case - Página de Perguntas FAQ</h1>
    <Link href='/'>
      <LinkStyle cor='darkred'> Ir para HOME</LinkStyle>
    </Link>
  </div>)
}