import { useState } from 'react';
import SplitPane from '../index';
import '../theme.css';

export default {
    title: 'Advanced',
};

export const AllowResize = () => {
    const [sizes, setSizes] = useState<(number | string)[]>(['20%', 'auto']);
    const [allowResize, setAllowResize] = useState(true); 

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    } as React.CSSProperties;

    return (
        <div style={{ height: 500 }}>
            <p>Enable and disable resize</p>
            <div>
            <button type="button" onClick={() => setAllowResize(!allowResize)}>
                {allowResize ? "Disable Resize" : "Enable Resize"}
                </button>
            </div>
            <SplitPane 
                sizes={sizes} 
                onChange={setSizes}
                allowResize={allowResize}
            >
                <div style={{ ...layoutCSS, background: '#ddd' }}>
                    Pane1
                </div>               
                <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                    Pane2
                </div>
            </SplitPane>
        </div>
    );
};
