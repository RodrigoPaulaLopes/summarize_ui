import { Container, Box, Paper, Grid } from "@mui/material"
import Header from "../components/Header/Index"
import { useState } from "react"
import ResultView from "../components/ResultVIew/Index"


const Home = () => {
    const [tab, setTab] = useState<number>(1)

    const changeTab = () => {
        setTab((prevTab) => (prevTab === 1 ? 0 : 1))
    }

    return (
        <>
            <Header activeTab={tab} onTabChange={changeTab} />
            <Box sx={{ flexGrow: 1 }}>
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>

                        <ResultView
                            originalText={"asdfasd"}
                            summarizedText={"asdfasdf"}
                            enhancedText={"asdfasdf"}
                            onReset={() => {}}
                        />

                    </Paper>
                </Container>

            </Box>
        </>
    )
}

export default Home