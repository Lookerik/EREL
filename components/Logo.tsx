// The official symbol, rendered from /public/brand/logo.png as a mask: exact shape, any colour via text-*.
export default function Logo({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return <div role="img" aria-label="Brand symbol" className={`logo-mask ${className}`} style={style} />;
}
