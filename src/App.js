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
    const [title, setTitle] = useState('')
    const [place, setPlace] = useState('')
    const [role, setRole] = useState('')
    const [date, setDate] = useState('')
    const [textdesc, setTextdesc] = useState('')
    const [skillset, setSkillset] = useState('')
    const [contents, setContents] = useState([])

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeInfo = (e) => {
        setInfo(e.target.value)
    }
    const changeTitle = (e) => {
        setTitle(e.target.value)
      }
    const changePlace = (e) => {
        setPlace(e.target.value)
    }
    const changeRole = (e) => {
        setRole(e.target.value)
    }
    const changeDate = (e) => {
        setDate(e.target.value)
    }
    const changeTextdesc = (e) => {
        setTextdesc(e.target.value)
    }
    const changeSkillset = (e) => {
        setSkillset(e.target.value)
    }

    const handleSubmitContentEdu = () => {
        let array = textdesc.split('\n')
        array = array.map(point => point.trim())
        setDesc(array)
    
        let detail = createDetail(title, place, role, date, desc)
        detail.type = 'edu'
        setContents(contents => [...contents, detail])
        setTitle('')
        setPlace('')
        setRole('')
        setDate('')
        setTextdesc('')
        setDesc([])
    }
    const handleSubmitContentWork = () => {
        let array = textdesc.split('\n')
        array = array.map(point => point.trim())
        setDesc(array)

        let detail = createDetail(title, place, role, date, textdesc)
        detail.type = 'work'
        setContents(contents => [...contents, detail])
        console.log(detail)
        setTitle('')
        setPlace('')
        setRole('')
        setDate('')
        setTextdesc('')
        setDesc([])
    }
    const handleSubmitContentLead = () => {
        let array = textdesc.split('\n')
        array = array.map(point => point.trim())
        setDesc(array)
    
        let detail = createDetail(title, place, role, date, desc)
        detail.type = 'lead'
        setContents(contents => [...contents, detail])
        setTitle('')
        setPlace('')
        setRole('')
        setDate('')
        setTextdesc('')
        setDesc([])
    }

    const createDetail = (
        title,
        place,
        role,
        date,
        textdesc,
        type
        ) => {
        return {
            title: title,
            place: place,
            role: role,
            date: date,
            textdesc: textdesc,
            type: type,
        }
    }

    function WriteData() {
        return (
            <ul className='data-container'>
                {contents.map(content => (
                    <li className="data">
                        <img src={pencilEdit} alt="edit"/>
                        <img src={trashCan} alt="delete"/>
                        {content.title}
                    </li>
                ))}
            </ul>
        )
    }
    
    function SectionEdu({}) {
        return (
            contentsEdu.map(contentEdu => (
                <div key={uniqid()}>
                    <div className="title-place" key={uniqid()}>
                        <div className="title">{contentEdu.title}</div>
                        <div className="place">{contentEdu.place}</div>
                    </div>
                    <div className="role-date">
                        <div className="role">{contentEdu.role}</div>
                        <div className="date">{contentEdu.date}</div>
                    </div>
                    <ul>
                        {contentEdu.textdesc.split('\n').map(point => (
                            <li><div className="description">{point}</div></li>
                        ))}
                    </ul>
                </div>
            ))
        )
    }
    function SectionWork({}) {
        return (
            contentsWork.map(contentWork => (
                <div key={uniqid()}>
                    <div className="title-place">
                        <div className="title">{contentWork.title}</div>
                        <div className="place">{contentWork.place}</div>
                    </div>
                    <div className="role-date">
                        <div className="role">{contentWork.role}</div>
                        <div className="date">{contentWork.date}</div>
                    </div>
                    <ul>
                        {contentWork.textdesc.split('\n').map(point => (
                            <li><div className="description">{point}</div></li>
                        ))}
                    </ul>
                </div>
            ))
        )
    }
    function SectionLead({}) {
        return (
            contentsLead.map(contentLead => (
                <div key={uniqid()}>
                    <div className="title-place">
                        <div className="title">{contentLead.title}</div>
                        <div className="place">{contentLead.place}</div>
                    </div>
                    <div className="role-date">
                        <div className="role">{contentLead.role}</div>
                        <div className="date">{contentLead.date}</div>
                    </div>
                    <ul>
                        {contentLead.textdesc.split('\n').map(point => (
                            <li><div className="description">{point}</div></li>
                        ))}
                    </ul>
                </div>
            ))
        )
    }
    function SectionSkill() {
        return (
            <ul>
                {skillset.split('\n').map(point => (
                    <li className="skill"><div className="description">{point}</div></li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <div className='header'>Professional CV Builder</div>
            <div className="a4">
                <h1 className="full-name">{name}</h1>
                <p className="personal-info">
                    {info}
                </p>

                <div className="heading">EDUCATION</div>
                <hr></hr>
                <SectionEdu />

                <div className="heading">WORK EXPERIENCE</div>
                <hr></hr>
                <SectionWork />

                <div className="heading">LEADERSHIP EXPERIENCE</div>
                <hr></hr>
                <SectionLead />

                <div className="heading">SKILLS</div>
                <hr></hr>
                <SectionSkill />
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

            <div className="section">
                <div className="sub-section">
                    <Input
                        label='Company/Title:'
                        value={title}
                        onChange={changeTitle}
                        className='input-title'
                        placeholder="ABC Pte. Ltd"
                    />
                    <Input
                        label='Location:'
                        value={place}
                        onChange={changePlace}
                        className='input-location'
                        placeholder="Singapore"
                    />
                </div>
                <div className="sub-section">
                    <Input
                        label='Role:'
                        value={role}
                        onChange={changeRole}
                        className='input-role'
                        placeholder="Senior Software Engineer"
                    />
                    <Input
                        label='Date:'
                        value={date}
                        onChange={changeDate}
                        className='input-date'
                        placeholder="February 20XX - Present"
                    />
                </div>
                <InputTextArea
                    label='Description:'
                    value={textdesc}
                    onChange={changeTextdesc}
                    className='input-desc'
                    placeholder={'Negotiated...., saving XX% of expected budget costs.\nCollaborated..., achieving a company growth of XX% in XX years.'}
                />
            </div>

            <div className="btn-container">
                <button className="to-edu" onClick={handleSubmitContentEdu}>Education</button>
                <button className="to-work" onClick={handleSubmitContentWork}>Work Experience</button>
                <button className="to-leader" onClick={handleSubmitContentLead}>Leadership Experience</button>
            </div>

            <WriteData />

            <InputSkillArea
                label='Skills:'
                value={skillset}
                onChange={changeSkillset}
                className='input-skill'
                placeholder={'Proficient in English, conversant in Japanese.\nJavascript | HTML | CSS | React | Node.js | Express | MongoDB'}
            />

            <footer onClick={redirectGithub}>Git Repo <img src={githubLogo} alt='Github Logo'/></footer>
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

function InputTextArea({
    label,
    value,
    onChange,
    className,
    placeholder
}) {
    return (
        <label className='insert'>
        {label}
        <textarea
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
        ></textarea>
        </label>
    )
}

function InputSkillArea({
    label,
    value,
    onChange,
    className,
    placeholder
}) {
    return (
        <label className='insert skill-section'>
            {label}
            <textarea
                value={value}
                onChange={onChange}
                className={className}
                placeholder={placeholder}
            ></textarea>
        </label>
    )
}

export default App