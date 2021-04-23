import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {CssBaseline} from "@material-ui/core";
import Header from "./components/Header";
import Projects from "./components/ProjectsSection";

const useStyles = makeStyles((theme) => ({
 root:{
     minHeight: "100vh",
     backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg2.jpg"})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover"
 }
}))

const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Projects/>
        </div>
    )
}

export default App