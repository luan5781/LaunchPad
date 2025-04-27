'use client';

import { useState } from 'react';

export default function GerarPlano() {
  const [nome, setNome] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [publicoAlvo, setPublicoAlvo] = useState('');
  const [redesSociais, setRedesSociais] = useState('');
  const [plano, setPlano] = useState<any>(null);

  const gerarPlano = async () => {
    const res = await fetch('/api/gerar-plano', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        objetivo,
        publicoAlvo,
        redesSociais: redesSociais.split(',').map(rs => rs.trim())
      }),
    });

    const data = await res.json();
    setPlano(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">Gerar Plano de Marketing</h1>

        <div className="space-y-6">
          <input
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Nome do Projeto"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Objetivo"
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
          />
          <input
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Público Alvo"
            value={publicoAlvo}
            onChange={(e) => setPublicoAlvo(e.target.value)}
          />
          <input
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Redes Sociais (separadas por vírgula)"
            value={redesSociais}
            onChange={(e) => setRedesSociais(e.target.value)}
          />

          <button
            className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-300"
            onClick={gerarPlano}
          >
            Gerar Plano
          </button>
        </div>

        {plano && (
          <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">{plano.titulo}</h2>
            <p className="mb-2"><span className="font-semibold">Objetivo:</span> {plano.objetivo}</p>
            <p className="mb-2"><span className="font-semibold">Público Alvo:</span> {plano.publicoAlvo}</p>
            <p className="mb-4"><span className="font-semibold">Redes Sociais:</span> {plano.redesSociais.join(', ')}</p>

            <div>
              <h3 className="font-semibold mb-2">Estratégias:</h3>
              <ul className="list-disc list-inside space-y-1">
                {plano.estrategias.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="mt-4"><span className="font-semibold">Acompanhamento:</span> {plano.acompanhamento}</p>
          </div>
        )}
      </div>
    </div>
  );
}
