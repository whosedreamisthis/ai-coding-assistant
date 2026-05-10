import { features } from '@/data/features';

const FeatureGrid = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-10">
      {features.map(({ icon, title, description }, index) => (
        <div key={index}>
          <div className="flex items-start flex-col gap-4">
            <div>
              <p className="w-12 h-12 text-3xl flex text-center items-center justify-center bg-linear-to-r from-purple-500 to-blue-500 rounded-lg ">
                {icon}
              </p>
            </div>
            <p className="font-bold">{title}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
