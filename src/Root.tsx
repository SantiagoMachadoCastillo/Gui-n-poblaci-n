import {Composition} from 'remotion';
import {Infografico} from './scenes/Infografico';
import {FPS, HEIGHT, WIDTH} from './styles/formato';

export type InfograficoProps = {
  showSafeZones: boolean;
};

export const Root = () => (
  <Composition
    id="Infografico"
    component={Infografico}
    durationInFrames={FPS * 30}
    fps={FPS}
    width={WIDTH}
    height={HEIGHT}
    defaultProps={{showSafeZones: false}}
  />
);
