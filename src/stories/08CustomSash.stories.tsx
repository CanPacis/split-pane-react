import { useState } from 'react';
import SplitPane, { Pane, SashContent } from '../index';
import '../theme.css';

export default {
    title: 'Advanced',
};

export const CustomSash = () => {
    const [sizes, setSizes] = useState<(number | string)[]>([200, 200, 'auto']);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    } as React.CSSProperties;

    return (
        <div style={{ height: 500 }}>
            <p>Here are three different theme styles</p>
            <SplitPane 
                sizes={sizes}
                onChange={setSizes}
                resizerSize={6}
                sashRender={() => (
                    <SashContent style={{ backgroundColor: 'gray' }} />
                )}
            >
                <Pane>
                    <div style={{ ...layoutCSS, backgroundColor: '#ddd' }} >
                        pane1
                    </div>
                </Pane>
                <Pane>
                    <div style={{ ...layoutCSS, backgroundColor: '#ccc' }} >
                        pane2
                    </div>
                </Pane>
                <Pane>
                    <div style={{ ...layoutCSS, backgroundColor: '#bbb' }} >
                        pane3
                    </div>
                </Pane>
            </SplitPane>
        </div>
    );
};
