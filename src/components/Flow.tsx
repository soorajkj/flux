/* eslint-disable no-unused-vars */
'use client';

import { useCallback, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  Connection,
  Edge,
  Node,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import { initialEdges, initialNodes } from 'src/mocks/flow';
import FlowNode from '@/components/FlowNode';

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);
  const nodeTypes = useMemo(() => ({ custom: FlowNode }), []);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleNodeClick = () => {};

  const handleEdgeClick = () => {};

  return (
    <div className="relative flex h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onEdgeClick={handleEdgeClick}
        onNodeClick={handleNodeClick}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        className="h-full w-full flex-1"
      ></ReactFlow>
    </div>
  );
}
