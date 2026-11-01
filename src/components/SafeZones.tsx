import {AbsoluteFill} from 'remotion';
import {SAFE_ZONE_BOTTOM, SAFE_ZONE_TOP} from '../styles/zonas-seguras';
import {SAFE_ZONE_LINE, SAFE_ZONE_LABEL} from '../styles/colors';

export const SafeZones = () => (
  <AbsoluteFill style={{pointerEvents: 'none'}}>
    <div style={{position: 'absolute', top: SAFE_ZONE_TOP, left: 0, right: 0, borderTop: `4px dashed ${SAFE_ZONE_LINE}`}}>
      <span style={{color: SAFE_ZONE_LABEL, fontFamily: 'sans-serif', fontSize: 28}}>Inicio de zona segura</span>
    </div>
    <div style={{position: 'absolute', bottom: SAFE_ZONE_BOTTOM, left: 0, right: 0, borderTop: `4px dashed ${SAFE_ZONE_LINE}`}}>
      <span style={{color: SAFE_ZONE_LABEL, fontFamily: 'sans-serif', fontSize: 28}}>Fin de zona segura</span>
    </div>
  </AbsoluteFill>
);
