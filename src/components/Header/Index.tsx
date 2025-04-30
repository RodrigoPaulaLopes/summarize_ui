import React from 'react';
import { FileText, History as HistoryIcon, AlignJustify, X } from 'lucide-react';
import { AppBar, Box, Container, IconButton, Tab, Tabs, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeaderProps {
    activeTab: number;
    onTabChange: (value: number) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleTabChange = (newValue: number) => {
        onTabChange(newValue);
        setMobileMenuOpen(false);
    };

    const menuItems = [
        { icon: <FileText size={20} />, label: 'Processar Texto', value: "/home" },
        { icon: <HistoryIcon size={20} />, label: 'Meus Textos', value: "/history" },
    ];

    const mobileMenu = (
        <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            PaperProps={{
                sx: {
                    width: 240,
                    bgcolor: 'background.paper',
                },
            }}
        >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={() => setMobileMenuOpen(false)}>
                    <X size={24} />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        button
                        key={item.value}
                        onClick={() => handleTabChange(item.value)}
                        selected={activeTab === item.value}
                        sx={{
                            color: activeTab === item.value ? 'primary.main' : 'text.primary',
                            '&.Mui-selected': {
                                bgcolor: 'primary.main',
                                color: 'white',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                            },
                        }}
                    >
                        <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );

    return (
        <>
            <AppBar position="static" color="inherit" elevation={1}>
                <Container maxWidth="lg" color="inherit">
                    <Toolbar disableGutters>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <FileText size={20} />
                            <Typography variant="h6" component="h1" color="text.primary" fontWeight="bold">
                                Summarize
                            </Typography>
                        </Box>

                        {isMobile ? (
                            <IconButton
                                sx={{ ml: 'auto' }}
                                onClick={() => setMobileMenuOpen(true)}
                                color="inherit"
                            >
                                <AlignJustify size={24} />
                            </IconButton>
                        ) : (
                            <Tabs
                                value={activeTab}
                                onChange={(_, newValue) => handleTabChange(newValue)}
                                sx={{ ml: 'auto' }}
                            >
                                {menuItems.map((item) => (
                                    <Link to={item.value} >
                                        <Tab
                                            key={item.value}
                                            icon={item.icon}
                                            label={item.label}
                                            iconPosition="start"
                                        />
                                    </Link>
                                ))}
                            </Tabs>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
            {mobileMenu}
        </>
    );
};

export default Header;