interface HeadingProps {
  text: string;
}

export function Heading({ text = "" }: HeadingProps) {
  return <h2 className="text-3xl font-bold text-content-base">{text}</h2>;
}
