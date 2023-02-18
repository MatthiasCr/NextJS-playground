import React from 'react'

export function Input({ attribute, state, setState, label }) {
  return (
    <>
      <label htmlFor={attribute}>{label}</label>
      <br />
      <input
        type="text"
        id={attribute}
        value={state}
        onChange={(e) => { setState(e.target.value) }}
        className="w-full boder bg-slate-100 border  border-slate-300 text-xl rounded-md focus:outline-sky-600"
        required
      />
    </>
  )
}

export function TextSmall({ attribute, state, setState, label }) {
  return (
    <>
      <label htmlFor={attribute}>{label}</label>
      <br />
      <textarea
        type="text"
        id={attribute}
        value={state}
        onChange={(e) => { setState(e.target.value) }}
        className="w-full boder bg-slate-100 border  border-slate-300 text-xl rounded-md focus:outline-sky-600"
        required
      />
    </>
  )
}

export function TextLarge({ attribute, state, setState, label }) {
  return (
    <>
      <label htmlFor={attribute}>{label}</label>
      <br />
      <textarea
        type="text"
        id={attribute}
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          e.target.style.height = ""; e.target.style.height = e.target.scrollHeight + "px";
        }}
        className="w-full h-60 min-h-5 boder bg-slate-100 border border-slate-300 text-xl rounded-md focus:outline-sky-600"
        required
      />
    </>
  )
}