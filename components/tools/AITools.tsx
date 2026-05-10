import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DebugTool from '@/components/tools/DebugTool';
import ExplainTool from '@/components/tools/ExplainTool';
import GenerateTool from '@/components/tools/GenerateTool';
import { tabs } from '@/data/tabs';
import { Tab } from '@/types';

export function AITools() {
  return (
    <Tabs defaultValue="explain" className="w-full max-w-4xl mx-auto p-4">
      <TabsList className="items-stretch grid grid-cols-3 rounded-t-xl rounded-b-none bg-zinc-900 border-x border-t border-zinc-800 h-13 p-0">
        {tabs.map((tab: Tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className={`data-active:bg-blue-500 text-slate-300 data-active:text-white rounded-sm h-full transition-all text-lg px-4 data-active:bg-linear-to-r ${tab.gradient}`}
          >
            <div className="flex items-center gap-2">
              <p>{tab.icon}</p>
              <p>{tab.label}</p>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="explain">
        <ExplainTool />
      </TabsContent>
      <TabsContent value="debug">
        <DebugTool />
      </TabsContent>
      <TabsContent value="generate">
        <GenerateTool />
      </TabsContent>
    </Tabs>
  );
}
