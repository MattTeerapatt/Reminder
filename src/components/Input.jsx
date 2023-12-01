import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props}, ref) {

    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    
    return(
        
            <div>
                <p className="flex flex-col gap-1 my-4">
                    <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
                    {textarea ? <textarea ref = {ref} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                    {... props}/> : <input ref = {ref} className={classes}{... props}/>}
                </p>
            </div>
        
    )
});

export default Input;