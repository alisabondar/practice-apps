
export default function F3({handleSubmit, setCurrentPage}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Credit Card Number: <input name='ccnum' /></label>
        <label>Expiration Data: <input name='exp' /></label>
        <label>CVV: <input name='cvv' /></label>
        <label>Billing Zipcode: <input name='billzip' /></label>
        <button type='submit'>Next</button>
      </form>
    </>
  )
}