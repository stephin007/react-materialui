import React, {useState, useEffect} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {AppBar, Collapse, IconButton, Toolbar} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { FaReact } from "react-icons/fa";

const useStyles = makeStyles((theme)=>({
    root:{
       display: "flex",
       justifyContent: "center",
        alignItems: "center",
        height:"100vh",
        fontFamily: "Nunito"
    },
    appbar :{
        background: "none"
    },
    navbarTitle:{
        flexGrow: "1"
    },
    reactIcon:{
        color:"#fff",
        marginBottom:"-3px"
    },
    colortitletext:{
        color:"#FF3E71"
    },
    heroContainer:{
        textAlign:"center"
    },
    heroTitle:{
        color:"#fff",
        fontSize: "4.5rem"
    },
    downArrow:{
        color:"#fff",
        fontSize: "2rem"
    }
}))

const Header = () => {
    const classes = useStyles()
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(true)
    },[])
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <h1 className={classes.navbarTitle}>My<span className={classes.colortitletext}>Space.</span></h1>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...checked ? {timeout: 1000} : {}}>
                <div className={classes.heroContainer}>
                    <h1 className={classes.heroTitle}><span className={classes.colortitletext}>React </span> <FaReact className={classes.reactIcon}/> <br/> Mini Projects</h1>
                    <IconButton>
                        <ExpandMoreIcon className={classes.downArrow} />
                    </IconButton>
                </div>
            </Collapse>

        </div>
    )
}

export default Header