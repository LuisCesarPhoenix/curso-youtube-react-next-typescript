// import Image from "next/image";

// src/app/page.tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Aqui a constante, variável e a função estão sendo declaradas globalmente.
const name = 'Cesar'
let profession = 'Desenvolvedor'   

function nameReturn() {
    return name
}

/*
Eu vou usar todo o modo de componente funcncional.
Eu tenho que usar o export porque o comporente vai ser importado em outro lugar.
Eu estou usando o default porque eu estou indicando que a função home é a função padrão de exportação deste arquivos.
Todas as funções devem retornar somente um componente. Se eu tentar colocar mais de um componente, ele vai dar erro.
*/
export default function Home() {
  return (
    <main className={`flex flex-col gap-8 items-center sm:items-start ${geistSans.variable} ${geistMono.variable}`}>
      <div>
        <div>
          {nameReturn()}
        </div>
        <div>
          {profession}
        </div>
        <div>
          {name} is a {profession}
        </div>
      </div>
    </main>
  );
}

