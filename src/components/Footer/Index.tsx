import { Box, Container, Typography } from "@mui/material"


const Footer = () => {
    return (
        <Box component="footer" sx={{ mt: 'auto', py: 3, bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} TextRefine. All rights reserved.
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer