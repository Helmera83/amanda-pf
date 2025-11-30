import { Warp, type WarpProps } from '@paper-design/shaders-react';

export default function WarpBackground(props: WarpProps) {

    const defaultProps = {
        speed: 0.3,
        rotation: 0.3,
        swirl: 0.8,
        swirlIterations: 9,
        shapeScale: 0.3,
        color1: 'rgba(0,0,0,0.7)',
        color2: '#2512a2',
        color3: '#fd4e03',
        style: { width: '100%', height: '100%' }
    };

    return <Warp {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />;

}