import FlowProvider from '@/components/FlowProvider';
import Flow from '@/components/Flow';

export default function DashboardPage() {
  return (
    <>
      <FlowProvider>
        <Flow />
      </FlowProvider>
    </>
  );
}
