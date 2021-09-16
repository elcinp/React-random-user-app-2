import React,{useState,useEffect} from 'react'
import './Card.css'
import axios from "axios"
import clarusway from '../assets/cw.svg'
import woman from '../assets/woman.svg'
import mail from '../assets/mail.svg'
import growman from '../assets/growing-up-man.svg'
import location from '../assets/location.svg'
import phone from '../assets/phone.svg'
import padlock from '../assets/padlock.svg'


const Card = () => {
    const [user,setUser] = useState("")
    const [show,setShow] = useState(false)

    const newUser = () => {
        axios.get('https://randomuser.me/api/')
        .then((response) => {
            setUser(response.data.results[0])
            console.log(response.data.results[0]);
        })
    }
    useEffect(()=>{
        newUser()
    },[])

    const addUser = () => {
        document.querySelector("tbody").innerHTML += `
        <td>${user.name?.first}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.dob?.age}</td>
        `
        document.querySelector("table").style.display="inline"
    }



    return(
        <div className="main-container">
            <div >
                <img id="clarusway-logo" src={clarusway} alt="" />
            </div>
            <div className="card-container">
                <div className="profile-pic">
                    <img src={user.picture?.large} alt="" />
                </div>
                <div className="text-container">
                    <p></p>
                    <p></p>
                </div>
                <div className="icon-container">
                    <ul className="icons" >
                        <li><img src={woman} alt="" /></li>
                        <li><img src={mail} alt="" /></li>
                        <li><img src={growman} alt="" /></li>
                        <li><img src={location} alt="" /></li>
                        <li><img src={phone} alt="" /></li>
                        <li><img src={padlock} alt="" /></li>
                    </ul>
                </div>
                <div className="button-container">
                    <button onClick={newUser}>NEW USER</button>
                    <button onClick={addUser}>ADD USER</button>
                </div>
                <div className="table-container">
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}

export default Card