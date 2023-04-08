import React from 'react'
import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className={"flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md"}>
            <div className={"flex space-x-2 items-center"}>
                <Image height={'30'} width={'30'}
                       src={"https://static-00.iconduck.com/assets.00/openai-icon-505x512-pr6amibw.png"}
                       alt={"OpenAI Logo"}/>

                <div>
                    <h1 className={'font-bold'}>
                        Programação Fortificada | Gerador de imagens por <span className={'text-blue-600'}>IA</span>
                    </h1>
                    <h2 className={'text-xs'}>Recursos de ChatGPT, Dall-E e Azure.</h2>
                </div>

                <div className={"flex text-xs md:text-base divide-x items-center text-gray-500"}>
                    <Link href={"https://www.instagram.com/programacaofortificada/"}
                          className={"px-2 font-light text-right"}>
                        Siga Programação Fortificada no Instagram
                    </Link>
                    <Link href={"https://github.com/m-carneiro/dalle-two"}
                          className={"px-2 font-light"}>
                        GitHub repository
                    </Link>
                </div>
            </div>
        </header>
    )
}

