'use client'
import { useEffect, useState } from "react"

export default function Dashboard() {
    const [users, setUsers] = useState<any[]>([])
    const [text, setText] = useState()

    const findUsers = async function () {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users)
            })
    }

    // const mandaMensagem = async function () {
    //     fetch('/api/tryFirebase')
    //         .then((res) => {
    //             const data = res.json()
    //             console.log('Mensagem Enviada')
    //         }).catch((e) => {
    //             console.log(e)
    //         })
    // }

    useEffect(() => {
        //mandaMensagem()
    }, [])

    return (
        <div className='w-full'>
            <div className="flex flex-col w-">
                <form>
                    <label className='text-gray-700'>Matrícula: </label>
                    <input className='mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900' placeholder='Digite a matrícula do segurado'></input>
                    <button type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                        Pesquisar
                    </button>
                </form>
            </div>
        </div>
    )
}