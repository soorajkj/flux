import { Edge, Node } from 'reactflow';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    data: { title: 'Input Node', desc: 'Node description one' },
    position: { x: 100, y: 100 },
  },

  {
    id: '2',
    type: 'custom',
    data: { title: 'Default Node', desc: 'Node description two' },
    position: { x: 100, y: 200 },
  },
  {
    id: '3',
    type: 'custom',
    data: { title: 'Default Node', desc: 'Node description three' },
    position: { x: 100, y: 300 },
  },
];

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];
