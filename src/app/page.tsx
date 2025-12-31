import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Banner with Parallax Background */}
      <div
        className="relative w-full h-screen"
      >
        <div
        className="relative w-full h-screen"
        style={{
          backgroundImage: 'url(/banner.png)',
          backgroundSize: '30%',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.2,
        }}
      ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center text-black px-4  rounded-lg p-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Matemática como Pensar
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
              
            </p>
            <p className="text-lg mb-12 drop-shadow-md">
              Este espaço é dedicado ao aprendizado profundo, onde a matemática é vista como uma ferramenta de pensamento crítico e compreensão universal.
            </p>
            <Link href="/estude">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-zinc-900 hover:bg-zinc-100">
                Comece a Estudar
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Additional content can go here if needed */}
    </div>
  );
}
