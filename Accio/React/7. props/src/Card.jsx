function Card({ name, age, address }) {
  return (
    <>
      <h1>Hi, I'm {name}</h1>
      <h2>I'm Learning React Props</h2>
      <h2>My age is {age}</h2>
      {address && <h1>Welcome back! {address.city}</h1>}
    </>
  );
}

export default Card;