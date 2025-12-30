import { Separator } from "@/components/ui/separator";

export default function Estude() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar futura */}
          <aside className="w-64 bg-white p-6 rounded-lg border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4">Tópicos</h2>
            <p className="text-zinc-600">Menu lateral em desenvolvimento.</p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-700 hover:text-zinc-900">Introdução</a></li>
              <li><a href="#" className="text-zinc-700 hover:text-zinc-900">Conceitos Básicos</a></li>
              <li><a href="#" className="text-zinc-700 hover:text-zinc-900">Exemplos</a></li>
            </ul>
          </aside>

          {/* Conteúdo principal */}
          <main className="flex-1 bg-white p-8 rounded-lg border border-zinc-200">
            <h1 className="text-3xl font-bold text-zinc-900 mb-6">Área de Estudo</h1>
            <p className="text-lg text-zinc-600 mb-4">
              Esta é a área principal para o conteúdo de aprendizado.
            </p>
            <p className="text-zinc-500">
              Aqui serão apresentados conceitos, exercícios e materiais educacionais sobre matemática como forma de pensar.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}