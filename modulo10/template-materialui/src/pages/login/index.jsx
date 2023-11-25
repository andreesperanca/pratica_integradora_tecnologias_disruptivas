import React, {useState, useEffect} from 'react';
import { Typography, Container } from '@mui/material';

const Login = () => {

    const[login, setLogin] = useState('');

    return(
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h4">
          Olá meu nome é André, tenho 23 anos e sou Desenvolvedor Android Nativo. E estou me aventurando no mundo do React Native.
        </Typography>
      </Container>
    );
}

export default Login;