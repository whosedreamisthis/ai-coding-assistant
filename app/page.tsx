import FeatureGrid from '@/components/FeatureGrid';
import { AITools } from '@/components/tools/AITools';

export default function Home() {
  return (
    <div>
      <main>
        <AITools />
        <FeatureGrid />
      </main>
    </div>
  );
}
