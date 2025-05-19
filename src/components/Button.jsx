export default function Button({type, children }) {
  return (
    <button className={`btn ${type === 'secondary' ? 'brn--secondary' : ''}`}>{children}</button>
  )
}
