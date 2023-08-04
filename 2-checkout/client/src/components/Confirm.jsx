
export default function Confirm({handleSubmit, setCurrentPage, userData}) {
  // display user data here
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Please confirm the following information is correct:</h4>
        <p>Name: {}</p>
        <p>Email: {}</p>
        <p>Password: {}</p>
        <h5>Shipping Address</h5>
        <p>Line 1: {}</p>
        <p>Line 2: {}</p>
        <p>City: {}</p>
        <p>State: {}</p>
        <p>Zipcode: {}</p>
        <h5>Billing Information</h5>
        <p>Credit Card Number: {}</p>
        <p>Expiration Date: {}</p>
        <p>CVV: {}</p>
        <p>Billing Zipcode: {}</p>
        <button>Back</button>
        <button onClick={() => setCurrentPage('home')}>Purchase</button>
      </form>
    </>
  )
}