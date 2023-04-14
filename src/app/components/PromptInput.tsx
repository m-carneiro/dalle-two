'use client'
import React, {useState} from 'react'
import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import useSWR from "swr";

export function PromptInput() {
    const [input, setInput] = useState('')
    const {
        data: suggestion,
        error,
        isLoading,
        mutate,
        isValidating
    } = useSWR('/api/suggestions', fetchSuggestionFromChatGPT, {revalidateOnFocus: false})

    return (
        <>
            <div className={"m-10"}>
                <form
                    className={"flex flex-col xl:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x"}>

                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={"Digite uma frase ou palavra para gerar uma imagem"}
                        className={"flex-1 p-4 outline-none rounded-md"}/>

                    <button
                        disabled={!input}
                        type={"submit"}
                        className={`p-4 ${input ? 'bg-blue-500 text-white transition-colors duration-200' : 'text-gray-300 cursor-not-allowed'}`}>
                        Gerar
                    </button>

                    <button
                        className={"p-4 bg-blue-500 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"}
                        type={"button"}>
                        Usar
                        Sugestão
                    </button>

                    <button
                        className={"p-4 bg-white text-blue-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold"}
                        type={"button"}>
                        Nova
                        Sugestão
                    </button>
                </form>
            </div>
        </>
    )
}
