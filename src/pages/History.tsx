import { useState } from "react";
import History from "../components/History/Index";
import Header from "../components/Header/Index";
import { Container, Box } from "@mui/material";
import Footer from "../components/Footer/Index";


const HistoryPage = () => {

    const [history, setHistory] = useState([
        {
            id: 1,
            title: 'Como fazer crochet',
            content: "O crochê é uma técnica manual que envolve o uso de linha e agulha para criar uma variedade de peças, como blusas, bonecos e toalhas, além de outros objetos surpreendentes. Há pessoas talentosas que conseguem produzir e vender essas peças com habilidade, enquanto outras se dedicam ao crochê como um hobby, perdendo a noção do tempo ao passar horas a fio concentradamente. Dominar os pontos corretamente é fundamental para evitar falhas ou desfazer o trabalho. Embora possa parecer complicado no início, com prática e persistência, o crochê se torna mais fácil e prazeroso. Em resumo, o crochê é uma arte relaxante e gratificante que requer paciência e habilidade para ser dominada."
        },
        {
            id: 2,
            title: 'Como fazer crochet',
            content: "O crochê é uma técnica manual que envolve o uso de linha e agulha para criar uma variedade de peças, como blusas, bonecos e toalhas, além de outros objetos surpreendentes. Há pessoas talentosas que conseguem produzir e vender essas peças com habilidade, enquanto outras se dedicam ao crochê como um hobby, perdendo a noção do tempo ao passar horas a fio concentradamente. Dominar os pontos corretamente é fundamental para evitar falhas ou desfazer o trabalho. Embora possa parecer complicado no início, com prática e persistência, o crochê se torna mais fácil e prazeroso. Em resumo, o crochê é uma arte relaxante e gratificante que requer paciência e habilidade para ser dominada."
        },
    ]);
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