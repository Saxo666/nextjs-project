'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const menuItems = ['CPU', 'Graphic card', 'Ram', 'Mainboard', 'Power Supply', 'Memory'];

const priceData = [
  { year: '2020', CPU: 250, GPU: 400, RAM: 100 },
  { year: '2021', CPU: 300, GPU: 450, RAM: 120 },
  { year: '2022', CPU: 320, GPU: 470, RAM: 130 },
  { year: '2023', CPU: 350, GPU: 490, RAM: 140 },
  { year: '2024', CPU: 370, GPU: 500, RAM: 160 },
];

const bestHardware = {
  CPU: {
    name: 'Intel Core i9-14900K',
    cores: 24,
    clock: '5.8GHz',
    price: '$589',
  },
  GPU: {
    name: 'NVIDIA RTX 4090',
    memory: '24GB GDDR6X',
    clock: '2.5GHz',
    price: '$1599',
  },
  RAM: {
    name: 'Corsair Dominator Platinum RGB',
    size: '32GB (2x16GB)',
    speed: '6000MHz',
    price: '$199',
  },
};

export default function HomePage() {
  const [selectedMenu, setSelectedMenu] = useState('CPU');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">อุปกรณ์</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer px-2 py-1 rounded hover:bg-gray-700 ${
                selectedMenu === item ? 'bg-gray-700' : ''
              }`}
              onClick={() => setSelectedMenu(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-semibold mb-6">อัปเดตราคาและอุปกรณ์ที่ดีที่สุด</h1>

        {/* Chart Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">กราฟราคาย้อนหลัง 5 ปี</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="CPU" stroke="#8884d8" />
              <Line type="monotone" dataKey="GPU" stroke="#82ca9d" />
              <Line type="monotone" dataKey="RAM" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Best Hardware */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(bestHardware).map(([type, spec]) => (
            <div key={type} className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">{type}</h3>
              <p><strong>รุ่น:</strong> {spec.name}</p>
              {Object.entries(spec).map(([k, v]) =>
                k !== 'name' ? (
                  <p key={k}><strong>{k}:</strong> {v}</p>
                ) : null
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
