'use client';

import { useState, useCallback } from 'react';
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from 'reactflow';
import Separator from '@/components/shared/separator';
import Label from '@/components/shared/label';
import Input from '@/components/shared/input';

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
          type: 'smoothstep',
        },
      ]);
    },
    [edges]
  );

  return (
    <div className="relative flex h-screen flex-1">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={handleAddEdge}
        fitView
      >
        <Controls position="bottom-right" className="db-hierarchy" />
      </ReactFlow>
      <Separator orientation="vertical" />
      <div className="h-full w-80 space-y-4 overflow-y-auto px-4 py-10">
        <div className="flex flex-col-reverse">
          <Input id="text" className="mt-2 w-full bg-color-primary-light" />
          <Label htmlFor="text">Text</Label>
        </div>
        <div className="flex flex-col-reverse">
          <Input id="text" className="mt-2 w-full bg-color-primary-light" />
          <Label htmlFor="text">Text</Label>
        </div>
        <div className="flex flex-col-reverse">
          <Input id="text" className="mt-2 w-full bg-color-primary-light" />
          <Label htmlFor="text">Text</Label>
        </div>
        <div className="flex flex-col-reverse">
          <Input id="text" className="mt-2 w-full bg-color-primary-light" />
          <Label htmlFor="text">Text</Label>
        </div>
      </div>
    </div>
  );
}
