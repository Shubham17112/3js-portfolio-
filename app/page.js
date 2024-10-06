'use client'
import React, { useState } from "react";


const Page = ()=>{
    const [title,settile] = useState('')
    const [desc,setdesc] = useState('')
    const [mainTask,setmainTask] = useState([])
    // mainTask = []  

    const submitHandler =(e)=> {
        e.preventDefault()
        console.log(title)
        setmainTask(mainTask.concat([{title,desc}]))
      //  setmainTask([...mainTask, { title, desc }])
        //main_task = main_task + [title]  # Equivalent to [...mainTask, title] in JavaScript

        console.log(mainTask)
       
        settile('')
        setdesc('')
        

        

    }
    const deleteHandler =(i)=>{
       let copyTask = [...mainTask]
       copyTask.splice(i,1)
       setmainTask(copyTask)

    }

    let renderTask = <h2>There is no task</h2>
    renderTask = mainTask.map((t,i)=>{
        return <div key={i} className="flex text-2xl  p-5 justify-between"> <ul>Work: {t.title}</ul><ul>Desc: {t.desc}</ul> <button className="bg-red-600" onClick={()=>{deleteHandler(i)}}>Delete</button> </div>
    })

    return( 
       
        <>
        <h1 className="bg-black  text-slate-100 text-3xl font-bold h-30 p-5  flex text-center">To do list</h1>
        <form onSubmit={submitHandler} className="m-4">
                <input value={title} onChange={(e)=>{settile(e.target.value)}} className=" text-2xl border-zinc-100 border-4  m-8 px-4 py-2" type="text" placeholder="Enter Your task" />
                <input value={desc} onChange={(e)=>{setdesc(e.target.value)}} className=" text-2xl border-zinc-100 border-4  m-8 px-4 py-2" type="text" placeholder="Description" />
                <button className=" text-2xl p-2 m-8 py-2 rounded bg-black text-white">Submit</button>

        </form>
        <div className="w-full bg-gray-700">{renderTask}</div>
        </>
    )


}
export default Page




