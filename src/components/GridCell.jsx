
function GridCell({isFilled}) {
 
  return (
    <div className={`${isFilled ? ' bg-white' : ' bg-black'} border border-gray-400`}>
    </div>
  )
}

export default GridCell
