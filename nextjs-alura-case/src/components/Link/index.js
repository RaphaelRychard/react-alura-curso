import NextLink from "next/link";

export default function NewLink({children, href, ...props}) {
  return (<NextLink href={href} passHref legacyBehavior>
    <a {...props}>
      {children}
    </a>
  </NextLink>)
}
