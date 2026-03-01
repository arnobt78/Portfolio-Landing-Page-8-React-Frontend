/**
 * CTA button. name = label; isBeam = show animated ping dot; containerClass = extra Tailwind classes.
 * Use as <Button name="Click" isBeam containerClass="w-full" /> (e.g. for links, wrap in <a>).
 */
const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
