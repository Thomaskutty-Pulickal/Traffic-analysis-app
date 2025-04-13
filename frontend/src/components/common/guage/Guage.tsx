interface Props {
  value: number;
  title: string;
}

const Gauge = ({ value, title }: Props) => {
  const percent = (value / 10) * 100;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <span className="text-xs font-semibold inline-block text-gray-600">
            0 min
          </span>
          <span className="text-xs font-semibold inline-block text-gray-600">
            10 min
          </span>
        </div>
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${percent}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"
          />
        </div>
        <p className="text-sm text-center text-gray-700">
          {value.toFixed(1)} min
        </p>
      </div>
    </div>
  );
};

export default Gauge;
