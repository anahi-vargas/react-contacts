import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import {IoPersonAddSharp} from "react-icons/io5"
import { RiContactsBookFill } from "react-icons/ri"
import { MdLogout } from "react-icons/md"
import { AuthContext } from "../contexts/AuthContext"
import { Nav, NavIcon } from "./StyledComponents"


function NavBar() {
    const { logOut } = useContext(AuthContext)
    let navigate = useNavigate()

    return ( 
        <Nav>
            <NavIcon>
                <RiContactsBookFill onClick={() => navigate("/")} />
            </NavIcon>
            <NavIcon>
            <IoPersonAddSharp onClick={() => navigate("/contacts/add")} />
                </NavIcon>
            <NavIcon>
                <MdLogout onClick={()=> { logOut(); navigate("/login")}} />
            </NavIcon>
        </Nav>
     );
}

export default NavBar;