import { useState } from "react"


function Folder({ explorer }) {

    const [expand , setExpand] = useState(false)
    const [showInput , setShowInput] = useState({
        visible : false,
        isFolder : null,
    })

    const addFolder = (e ,isFolder)  => {
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible:true,
            isFolder
        });
    };

    const onAddFolder = (e) => {
        if(e.keyCode === 13 && e.target.value){
            //add add logic
            setShowInput({...showInput, visible:false })
        }

    }

    if(explorer.isFolder){
        return (
          <div className=" m-2 ">
              <div 
                  className=" w-96 bg-slate-300 mt-2 px-2 py-1 rounded-md flex justify-between items-center cursor-pointer"
                  onClick={() => setExpand(!expand)}>
                  <span> 📁 {explorer.name}</span>

 
                  <span className=" flex gap-1">
                      <button className=" border border-gray-500 px-1 rounded-sm" onClick={(e) =>addFolder(e,true)}>+Folder</button>
                      <button className=" border border-gray-500 px-1 rounded-sm">+File</button>
                  </span>
 
              </div>
              {expand && (<div className="pl-7" >
                    {showInput.visible && ( 
                    <div className=" flex items-center gap-2">
                        <span className=" mt-1">{showInput.isFolder ? "📁" : "📃"}</span>
                        <input 
                            type="text"
                            className=" px-2 py-1 outline-none mt-1 text-sm rounded-sm flex items-center justify-between cursor-pointer border border-gray-300"
                            autoFocus
                            onKeyDown={onAddFolder}
                            onBlur={() => setShowInput({...showInput , visible : false})}
                             />
                    </div>

                    )}
                    
                    
                    
                    {expand && explorer.items?.map((exp) => (
                            <Folder explorer={exp} key={exp.id} />
        
                    ))}

              </div>)}
              
            
          </div>
        )

    }else {
        return (
            <span className=" mt-1 ml-2 pl-3 flex flex-col"> 📃 {explorer.name}</span>
        )
    }
    
}

export default Folder
