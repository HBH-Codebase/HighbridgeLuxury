const Button = ({ text }: { text?: string }) => {
  return (
    <>
      <button className="btn-ring">
        {text}
      </button>
    </>
  )
}

export default Button;
