import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

import { Box, Button, TextField, Typography } from '@mui/material';

interface ResultViewProps {
    originalText: string;
    summarizedText: string;
    enhancedText: string;
    onReset: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({
    originalText,
    summarizedText,
    enhancedText,
    onReset,
}) => {
    const [activeView, setActiveView] = useState<ViewMode>('summarize');
    const [copied, setCopied] = useState(false);

    const activeText = activeView === 'summarize' ? summarizedText : enhancedText;
    const getWordCount = (text: string) => {
        console.log(text);
        return 1
    }
    const getCharacterCount = (text: string) => {
        return 1
    }

    const originalWordCount = getWordCount(originalText);
    const activeWordCount = getWordCount(activeText);
    const wordReduction = originalWordCount ? Math.round((1 - activeWordCount / originalWordCount) * 100) : 0;



    const handleCopy = () => {
        navigator.clipboard.writeText(activeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Box width={"100%"}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={6}>
                <Box display={'flex'} bgcolor={'gunmetal/5'} sx={{ backgroundColor: 'gunmetal/5', p: 1 }}>
                    <Button
                        onClick={() => setActiveView('summarize')}
                        sx={{
                            px: 4,
                            py: 2,
                            borderRadius: '10px',
                            transition: 'background-color 0.3s',
                            backgroundColor: activeView === 'summarize' ? 'coral' : 'transparent',
                            color: activeView === 'summarize' ? 'white' : 'paynes-gray',
                            boxShadow: activeView === 'summarize' ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                            '&:hover': {
                                backgroundColor: activeView === 'summarize' ? 'coral' : 'gunmetal/10',
                            },
                        }}
                    >
                        Summary
                    </Button>
                    <Button
                        onClick={() => setActiveView('enhance')}
                        sx={{
                            px: 4,
                            py: 2,
                            borderRadius: '10px',
                            transition: 'background-color 0.3s',
                            backgroundColor: activeView === 'enhance' ? 'coral' : 'transparent',
                            color: activeView === 'enhance' ? 'white' : 'paynes-gray',
                            boxShadow: activeView === 'enhance' ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                            '&:hover': {
                                backgroundColor: activeView === 'enhance' ? 'coral' : 'gunmetal/10',
                            },
                        }}
                    >
                        Enhanced
                    </Button>
                </Box>

                <Button
                    onClick={handleCopy}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        py: 2,
                        borderRadius: '10px',
                    }}
                >
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-coral" />}
                    <Typography sx={{ color: 'text-paynes-gray' }}>{copied ? 'Copiado!' : 'Copiar'}</Typography>
                </Button>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={2}>

                <TextField disabled label="Digite o titulo" fullWidth />
                <Box sx={{ p: 6, backgroundColor: 'white', border: 'solid 1px silver', borderRadius: '10px', mb: 6 }}>
                    <Typography variant='body1' component={'p'} className="whitespace-pre-wrap text-gunmetal">{activeText}</Typography>
                </Box>
            </Box>

            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2}>
                <Box sx={{
                    fontSize: '16px',
                    color: 'gray'
                }}>
                    {wordReduction > 0 ? (
                        <Typography>Reduced by {wordReduction}% ({originalWordCount} → {activeWordCount} words)</Typography>
                    ) : (
                        <Typography>{activeWordCount} words | {getCharacterCount(activeText)} characters</Typography>
                    )}
                </Box>
                <Button
                    onClick={onReset}
                    sx={{
                        px: 4,
                        py: 2,
                        fontSize: '16px',
                        borderRadius: '10px'
                    }}
                >
                    Process another text
                </Button>
            </Box>
        </Box>
    );
};

export default ResultView;