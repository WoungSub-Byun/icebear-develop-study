import React from 'react';
import Button from './components/Button';
import './App2.scss';

function App2() {
    return (
        <div className="App2">
            <div className="buttons">
                <Button color="gray" size="large">
                    Button
                </Button>
                <Button color="gray">Button</Button>
                <Button color="gray" size="small">
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button color="pink" size="large">
                    Button
                </Button>
                <Button color="pink">Button</Button>
                <Button color="pink" size="small">
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button size="large">Button</Button>
                <Button>Button</Button>
                <Button size="small">Button</Button>
            </div>
            <div className="buttons">
                <Button color="gray" size="large" outline={true}>
                    Button
                </Button>
                <Button outline>Button</Button>
                <Button color="pink" size="small" outline>
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button color="gray" size="large" fullWidth={true} outline>
                    Button
                </Button>
                <Button size="large" fullWidth>
                    Button
                </Button>
                <Button
                    color="pink"
                    size="large"
                    fullWidth
                    onClick={() => {
                        console.log('clicked!!!');
                    }}
                    onMouseMove={() => {
                        console.log('mouse moved!!!');
                    }}
                >
                    Button
                </Button>
            </div>
        </div>
    );
}

export default App2;
