import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center  ${inter.className}`}
    >

      <div className={'w-full  flex flex-col justify-center items-center gap-8'}>
        <Image src={'https://cdn.otaghak.com/otg-images-new/Web/Icon/general/logotype-large.svg'} alt={'otaghak'} width={600} height={400}/>
        <h1 className={'text-3xl'}>Otaghak code Challenge</h1>
        <h2 className={'text-2xl'}>Please read the readme file</h2>
      </div>

    </main>
  );
}
