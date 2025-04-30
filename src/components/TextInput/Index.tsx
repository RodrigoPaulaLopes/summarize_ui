import React, { useState } from 'react';
import { X } from 'lucide-react';
import { getCharacterCount, getWordCount } from '../services/textProcessing';
import { Box, Button, TextField, Typography } from '@mui/material';

interface TextInputProps {
    onSubmit: (text: string) => void;
    isProcessing: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ onSubmit, isProcessing }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onSubmit(text);
        }
    };

    const handleClear = () => {
        setText('');
    };
    const getWordCount = (text: string) => {
        return 1
    }
    const getCharacterCount = (text: string) => {
        return 1
    }

    const wordCount = getWordCount(text);
    const charCount = getCharacterCount(text);

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <Box className="relative mb-6">
            <TextField
                label="Cole ou digite seu texto aqui..."
                multiline
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                variant="outlined"
                fullWidth
                disabled={isProcessing}
                />
                {text && (
                    <Button
                        type="button"
                        onClick={handleClear}
                        sx={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            padding: '6px',
                            borderRadius: '50%',
                            transition: 'color 0.2s, background-color 0.2s',
                            color: 'paynesGray.main',
                            '&:hover': {
                                backgroundColor: 'coral.100',
                                color: 'coral.main',
                            },
                        }}
                        aria-label="Clear text"
                    >
                        <X size={16} />
                    </Button>
                )}
            </Box>

            <Box className="flex items-center justify-between">
                <Box className="text-sm text-paynes-gray">
                    {wordCount} {wordCount === 1 ? 'word' : 'words'} | {charCount} {charCount === 1 ? 'character' : 'characters'}
                </Box>
                <Button
                    type="submit"
                    disabled={!text.trim() || isProcessing}
                    className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${!text.trim() || isProcessing
                            ? 'bg-silver text-white cursor-not-allowed'
                            : 'bg-coral text-white hover:shadow-lg hover:shadow-coral/25'
                        }`}
                >
                    {isProcessing ? (
                        <Typography className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Processing...
                        </Typography>
                    ) : (
                        'Process Text'
                    )}
                </Button>
            </Box>
        </form>
    );
};

export default TextInput;