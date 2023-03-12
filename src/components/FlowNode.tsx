import { Handle, Position } from 'reactflow';
import { FlowNodeProps } from '@/types/flow';

export default function FlowNode({ data }: FlowNodeProps) {
  return (
    <div className="rounded-sm border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs text-zinc-400">
      <Handle
        type="target"
        position={Position.Top}
        className="inline-block h-1 w-1 rounded-none"
      ></Handle>
      <h3 className="mb-2 text-center text-zinc-100">{data.title}</h3>
      <p>{data.desc}</p>
      <Handle
        type="source"
        position={Position.Bottom}
        className="inline-block h-1 w-1 rounded-none"
      ></Handle>
    </div>
  );
}
