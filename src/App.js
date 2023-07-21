import { React, useState, useRef } from 'react'
import uniqid from 'uniqid'
import pencilEdit from './assets/pencil-edit.svg'
import trashCan from './assets/trash-can.svg'
import githubLogo from './assets/github-logo.svg'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import './css/main.css'

function App() {
    const [name, setName] = useState('')
    const [info, setInfo] = useState('')

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeInfo = (e) => {
        setInfo(e.target.value)
    }

    return (
        <>
            <div className='header'>Professional CV Builder</div>
            <div className="a4">
                <h1 className="full-name">{name}</h1>
                <p className="personal-info">
                    {info}
                </p>
            </div>

            <div className="name-pers-info">
                <Input
                    label='Name:'
                    value={name}
                    onChange={changeName}
                    className='input-name'
                    placeholder='John Doe'
                />
                <br></br>
                <Input
                    label='Personal Information:'
                    value={info}
                    onChange={changeInfo}
                    className='input-pers-info'
                    placeholder="Singapore | +65 1234 5678 | john.doe@gmail.com"
                />
            </div>
        </>
    )
}


function Input({
    label,
    value,
    onChange,
    className,
    placeholder
}) {
    return (
        <label className='insert'>
        {label}
        <input
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
        />
        </label>
    )
}

export default App