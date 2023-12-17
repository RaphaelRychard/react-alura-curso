import {Fragment, useState} from "react";
import Link from "../src/components/Link";
import LinkStyle from "../src/components/LinkEstilizado";

export function Title({children, as}) {

  const [Tag] = useState(as)

  return <Fragment>
      <Tag>{children}</Tag>

      <style jsx>{`
        ${Tag} {
            color: red;
            font-weight: bolder;
        }
      `}</style>
    </Fragment>
}

export default function HomePage() {
  return (<div>
    <Title as='h1'>Alura Case - HOME</Title>
    <Link href='/faq'>
      <LinkStyle cor='teal'>Ir para a página do FAQ</LinkStyle>
    </Link>
  </div>)
}