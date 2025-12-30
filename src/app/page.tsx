import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
            Matemática como Pensar
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 mb-8">
            Explore a matemática além dos números: filosofia, sentido e relações que moldam o mundo.
          </p>
          <p className="text-lg text-zinc-500 mb-12">
            Este espaço é dedicado ao aprendizado profundo, onde a matemática é vista como uma ferramenta de pensamento crítico e compreensão universal.
          </p>
          <Link href="/estude">
            <Button size="lg" className="text-lg px-8 py-4">
              Comece a Estudar
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
