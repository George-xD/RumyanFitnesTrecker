import React from "react";
import { TrainingDay } from "./components/TrainingDay";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <h1 className="text-2xl font-bold mb-4">Дневник тренировок</h1>
      <TrainingDay />
    </main>
  );
}
