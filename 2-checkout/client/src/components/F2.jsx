
export default function F2({handleSubmit, setCurrentPage}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Shipping Address</h4>
        <label>Line 1: <input name='line1' /></label>
        <label>Line2: <input name='line2' /></label>
        <label>City: <input name='city' /></label>
        <label>State: <input name='state' /></label>
        <label>Zipcode: <input name='zip' /></label>
        <button type='submit'>Next</button>
      </form>
    </>
  )
}