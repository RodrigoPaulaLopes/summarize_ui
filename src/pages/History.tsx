import { useState } from "react";
import History from "../components/History/Index";


const HistoryPage = () => {

    const [history, setHistory] = useState([]);
    const [originalText, setOriginalText] = useState('');
    const [summarizedText, setSummarizedText] = useState('');
    const [enhancedText, setEnhancedText] = useState('');
    const [showResults, setShowResults] = useState(false);

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
    return (
        <History
            items={history}
            onSelectItem={handleSelectHistoryItem}
            onClearHistory={handleClearHistory}
        />
    )
}

export default HistoryPage