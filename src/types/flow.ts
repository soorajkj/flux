/* eslint-disable no-unused-vars */

export enum ConnectionLineType {
  Bezier = 'default',
  Straight = 'straight',
  Step = 'step',
  SmoothStep = 'smoothstep',
  SimpleBezier = 'simplebezier',
}

export interface FlowNodeData {
  title: number;
  desc: number;
}

export interface FlowNodeProps {
  data: FlowNodeData;
}
