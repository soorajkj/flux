'use client';

import { useState, useCallback } from 'react';
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from 'reactflow';

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

export default function Hierarchy() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const _handleAddNode = useCallback(() => {
    setNodes([
      ...nodes,
      {
        id: Math.random().toString(),
        position: { x: 100, y: 100 },
        data: { label: '' },
      },
    ]);
  }, [nodes]);

  const handleAddEdge = useCallback(
    ({ source, target }: Connection) => {
      setEdges([
        ...edges,
        {
          id: Math.random().toString(),
          source,
          target,
          type: 'simplebezier',
        },
      ]);
    },
    [edges]
  );

  return (
    <div className="relative flex h-full w-full flex-col">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={handleAddEdge}
        fitView
        className="h-full w-full flex-1"
      ></ReactFlow>
    </div>
  );
}
