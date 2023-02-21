import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import NewsList from './components/NewsList';
import { Container, Typography } from '@mui/material';
// import { Task2 } from './Task2';

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="md">
                <Typography variant="h4">Hacker News Topstories</Typography>
                <NewsList />
                {/* <Task2 /> */}
            </Container>
        </Provider>
    );
}

export default App;
