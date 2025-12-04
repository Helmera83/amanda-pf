import { Warp, type WarpProps } from '@paper-design/shaders-react';

export default function WarpBackground(props: WarpProps) {

    const defaultProps = {
        speed: 0.3,
        rotation: 0.9,
        swirl: 0.5,
        swirlIterations: 6,
        shapeScale: 0.1,
        color1: 'rgba(250,250,250,0.2)',
        color2: '#2512a2',
        color3: '#fd4e03',
        style: { width: '100%', height: '100%' }
    };

    return <Warp {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />;

}