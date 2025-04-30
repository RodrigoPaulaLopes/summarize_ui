import { Container } from "@mui/material"
import Header from "../components/Header/Index"
import { useState } from "react"


const Home = () => {
    const [tab, setTab] = useState<number>(1)
    return (

        <Header activeTab={1} onTabChange={() => setTab(1)}/>
    )
}

export default Home