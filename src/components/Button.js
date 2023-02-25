import className from 'classnames';
import React from 'react';
function Button({
  children,
  color,
  backgroundColor,
  rounded,
  loading,
  ...rest
}) {
  const classes = className(
    rest.className,
    'btn',
    {
      'opacity-80': loading,
      'rounded-pill': rounded,
    }
  );

  const style = { color, backgroundColor }
  return (
    <button {...rest} disabled={loading} className={classes} style={style}>
      {loading ? <div className="spinner-border spinner-border-sm" /> : children}
    </button>
  );
}

export default Button;
