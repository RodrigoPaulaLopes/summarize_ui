import { useState } from "react";
import History from "../components/History/Index";
import Header from "../components/Header/Index";
import { Container , Box} from "@mui/material";
import Footer from "../components/Footer/Index";


const HistoryPage = () => {

    const [history, setHistory] = useState([{
        id: 1,
        title: 'hehehehe',
        content: "sadfasdfasdf"
    }]);
    const [originalText, setOriginalText] = useState('');
    const [summarizedText, setSummarizedText] = useState('');
    const [enhancedText, setEnhancedText] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [tab, setTab] = useState<number>(1)
    const handleSelectHistoryItem = (item: any) => {
        setOriginalText(item.originalText);
        setSummarizedText(item.summarizedText);
        setEnhancedText(item.enhancedText);
        setShowResults(true);
    };
    const handleClearHistory = () => {
        clearHistory();
        setHistory([]);
    };

    const clearHistory = () => {
        console.log('clear');

    }
    const changeTab = () => {
        setTab((prevTab) => (prevTab === 1 ? 0 : 1))
    }
    return (
        <>
            <Header activeTab={tab} onTabChange={changeTab} />
            <Box sx={{ flexGrow: 1 }} minHeight={'80vh'} >
                <Container maxWidth="lg" sx={{ py: 4 }} >
                    <History
                        items={history}
                        onSelectItem={handleSelectHistoryItem}
                        onClearHistory={handleClearHistory}
                    />
                </Container>
            </Box >
            <Footer />
        </>


    )
}

export default HistoryPage