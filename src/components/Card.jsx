const Card = ({ name, lastName, number }) => {
  return (
    <div className="card">
      <span>{name}</span>
      <span>{lastName}</span>
      <span>{number}</span>
    </div>
  )
}

export default Card;
