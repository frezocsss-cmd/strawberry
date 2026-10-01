export default function Reveal({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      data-reveal={direction}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}