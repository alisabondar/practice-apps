
// pass down handleSubmit func and call here onSubmit
export default function F1({handleSubmit}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name='name' />
        </label>
        <label>
          Email: <input name='email' />
        </label>
        <label>
          Password: <input name='password' type='password' />
        </label>
        <button type='submit'>Next</button>
      </form>
    </>
  )
}