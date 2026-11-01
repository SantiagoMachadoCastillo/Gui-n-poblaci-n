import {AbsoluteFill} from 'remotion';
import type {InfograficoProps} from '../Root';
import {BACKGROUND, TEXT} from '../styles/colors';
import {SafeZones} from '../components/SafeZones';

export const Infografico = ({showSafeZones}: InfograficoProps) => (
  <AbsoluteFill style={{backgroundColor: BACKGROUND, color: TEXT, alignItems: 'center', justifyContent: 'center'}}>
    <div style={{fontFamily: 'sans-serif', fontSize: 64}}>Infográfico: pendiente</div>
    {showSafeZones ? <SafeZones /> : null}
  </AbsoluteFill>
);
