import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <Box sx={{ flexGrow: 1, position: 'fixed', bottom: 0, width: '100%' }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="body1" color="inherit" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        &copy; 2024 Gerenciamento de Projetos - Kevin Fávaro. Todos os direitos reservados.
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Footer;
