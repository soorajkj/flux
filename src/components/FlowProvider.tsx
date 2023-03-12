'use client';

import { ReactFlowProps, ReactFlowProvider } from 'reactflow';

export default function FlowProvider(props: ReactFlowProps) {
  const { children, ...rest } = props;

  return <ReactFlowProvider {...rest}>{children}</ReactFlowProvider>;
}
