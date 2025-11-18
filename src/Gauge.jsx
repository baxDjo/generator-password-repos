import { useEffect, useState } from 'react';
const Gauge = () => {
 const [value, setValue] = useState(100); // 100% au départ

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev > 0 ? prev - 10 : 0)); // -10% toutes les 5 sec
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold text-gray-100 mb-2">
        Jauge descendante ({value}%)
      </h2>

      <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden">
        <div
          className="bg-blue-500 h-6 transition-all duration-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Gauge
