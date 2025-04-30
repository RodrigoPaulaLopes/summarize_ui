import { Container, Box, Paper, Grid } from "@mui/material"
import Header from "../components/Header/Index"
import { useEffect, useState } from "react"
import ResultView from "../components/ResultVIew/Index"
import TextInput from "../components/TextInput/Index"
import History from "../components/History/Index"
import Footer from "../components/Footer/Index"


const Home = () => {
    const [tab, setTab] = useState<number>(1)
    const [originalText, setOriginalText] = useState('');
    const [summarizedText, setSummarizedText] = useState('');
    const [enhancedText, setEnhancedText] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [history, setHistory] = useState([]);

    const getHistory = () => {
        return []

    }
    useEffect(() => {
        setHistory(getHistory());
    }, []);


    const summarizeText = (text: string) => {
        return text
    }
    const enhanceText = (text: string) => {
        return text
    }
    const saveToHistory = (item: any) => {
        return item
    }
    const handleProcessText = async (text: string) => {
        setOriginalText(text);
        setIsProcessing(true);

        try {
            const [summary, enhanced] = await Promise.all([
                summarizeText(text),
                enhanceText(text)
            ]);

            setSummarizedText(summary);
            setEnhancedText(enhanced);
            setShowResults(true);

            const newItem = {
                id: Date.now().toString(),
                originalText: text,
                summarizedText: summary,
                enhancedText: enhanced,
                createdAt: new Date()
            };

            saveToHistory(newItem);
            setHistory(getHistory());
        } catch (error) {
            console.error('Error processing text:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleReset = () => {
        setShowResults(false);
        setOriginalText('');
        setSummarizedText('');
        setEnhancedText('');
    };


    const clearHistory = () => {
        console.log('clear');

    }
    const handleClearHistory = () => {
        clearHistory();
        setHistory([]);
    };

    const changeTab = () => {
        setTab((prevTab) => (prevTab === 1 ? 0 : 1))
    }

    return (
        <>
            <Header activeTab={tab} onTabChange={changeTab} />
            <Box sx={{ flexGrow: 1 }} minHeight={'80vh'} >
                <Container maxWidth="lg" sx={{ py: 4 }} >
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                        {showResults ? (
                            <ResultView
                                originalText={originalText}
                                summarizedText={summarizedText}
                                enhancedText={enhancedText}
                                onReset={handleReset}
                            />
                        ) : (
                            <TextInput onSubmit={handleProcessText} isProcessing={isProcessing} />
                        )}
                    </Paper>
                </Container>

            </Box >
            <Footer />
        </>
    )
}

export default Home