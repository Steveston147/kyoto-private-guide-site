'use client';
import {useRef} from 'react';
import type {PointerEvent,ReactNode} from 'react';
import styles from './pattern-i.module.css';

export default function HeroMotion({children}:{children:ReactNode}){
  const ref=useRef<HTMLDivElement>(null);
  const onMove=(event:PointerEvent<HTMLDivElement>)=>{
    const el=ref.current;if(!el)return;
    const r=el.getBoundingClientRect();
    const x=((event.clientX-r.left)/r.width-.5).toFixed(3);
    const y=((event.clientY-r.top)/r.height-.5).toFixed(3);
    el.style.setProperty('--mx',x);el.style.setProperty('--my',y);
  };
  const reset=()=>{const el=ref.current;if(!el)return;el.style.setProperty('--mx','0');el.style.setProperty('--my','0');};
  return <div ref={ref} className={styles.motionStage} onPointerMove={onMove} onPointerLeave={reset}>{children}</div>;
}
