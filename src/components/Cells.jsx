
function Cell ({Filled , onClick,isDisabled}) {
  return (
        <button
        type="button" 
        className={` border border-black ${Filled ? "bg-green-500" : "bg-transparent"}`} 
        onClick={onClick}
        disabled={isDisabled}
        />
        

  )
}

export default Cell
