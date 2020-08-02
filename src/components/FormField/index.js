import React from "react"

function FormField({ value, onChange, type="text", name, label }) {
   return (
      <div>
         <label>
            {label}:
            <input
            label={label}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            />
         </label>
      </div>
   )
}

export default FormField