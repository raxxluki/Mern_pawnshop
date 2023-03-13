const Label = ({text, htmlFor, className}) => {
  return <label className={className} htmlFor={htmlFor}>{text}</label>
}

export default Label;