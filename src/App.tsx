import React from 'react';
import { Button } from './components/Button/Button';
import { ThemeProvider } from './components/ThemeProvider';
import { Card, CardHeader, CardContent } from './components/Card/Card.styled';
import { Input } from './components/Input/Input';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div
        style={{
          margin: '2em',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Card>
          <CardHeader>Buttons</CardHeader>
          <CardContent>
            <p>These are my powerfull buttons.</p>
            <Button disabled size="large" color="red">
              My button
            </Button>
            <Button color="blue">My button</Button>
            <Button size="small" color="green">
              My button
            </Button>
            <Button color="yellow">My button</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Inputs</CardHeader>
          <Input type="text" placeholder="type something..." />
        </Card>
      </div>
    </ThemeProvider>
  );
};
