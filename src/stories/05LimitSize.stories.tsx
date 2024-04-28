import { useState } from 'react';
import SplitPane, { Pane } from '../index';
import '../theme.css';

export default {
    title: 'Advanced',
};

export const MinSizeAndMaxSize = () => {
    const [sizes, setSizes] = useState<(number | string)[]>(['30%', 'auto']);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    } as React.CSSProperties;

    return (
        <div style={{ height: 500 }}>
            <p>Set the minimum and maximum values of pane1 through the pane component</p>
            <SplitPane sizes={sizes} onChange={setSizes}>
                <Pane minSize={100} maxSize='50%'>
                    <div style={{ ...layoutCSS, background: '#ddd' }}>
                        <p>Pane1</p>
                        <p>minSize: 100px</p>
                        <p>maxSize: 50%</p>
                    </div>
                </Pane>
                <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                    Pane2
                </div>
            </SplitPane>
        </div>
    );
};
