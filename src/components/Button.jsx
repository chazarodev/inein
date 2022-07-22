
const Button = ({children}) => {
  return (
    <button
        type="button" 
        className="bg-lightShades p-5 rounded-sm text-backGround font-bold shadow-lg shadow-lightShades/40 hover:shadow-lightAccent/40 hover:shadow-2xl ease-in-out transition-all delay-100"
    >
        {children}
    </button>
  )
}

export default Button