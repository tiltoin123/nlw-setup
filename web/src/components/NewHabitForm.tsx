import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const avaiableWeekDays=['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']

export function NewHabitForm() {
    const[title,setTitle] = useState('')
    const [weekDays,setWeekDays] = useState<number[]>([])

    async function createNewHabit(event: FormEvent) {
        event.preventDefault()
        if (!title || weekDays.length == 0){
            return
        }
        await api.post('habits',{
            title,
            weekDays,
        })
        setTitle('')
        setWeekDays([])
        alert('Hábito criado com sucesso!')
    }

    function handleToggleWeekDay(weekDay:number) {
        if(weekDays.includes(weekDay)){
            const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)
            setWeekDays(weekDaysWithRemovedOne)
        }else{
            const weekDaysWithAddedOne=[...weekDays,weekDay]
            setWeekDays(weekDaysWithAddedOne)
        }
    }

    return(
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual seu comprometimento?
            </label>

            <input type="text" id="title" placeholder="ex.:Exercícios, dormir bem, etc..." autoFocus value={title} onChange={event  => setTitle(event.target.value)} 
            className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-zinc-900"/>

            <label htmlFor="" className="font-semibold leading-tight">
                Qual a recorrência?
            </label>

            <div className='mt-3 flex flex-col gap-2'>
                {avaiableWeekDays.map((weekDay,index)=>{
                    return(      
                        <Checkbox.Root key={weekDay} checked={weekDays.includes(index)} onCheckedChange={()=>handleToggleWeekDay(index)}
                        className='flex items-center gap-3 group focus:outline-none'>
                            <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 transition-colors group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 group-focus:ring-2 group-focus:ring-violet-700 group-focus:ring-offset-2 group-focus:ring-offset-background'>
                                <Checkbox.Indicator>
                                <Check size={20} className='text-white'/>
                                </Checkbox.Indicator>
                            </div>
                            <span className='text-white leading-tight'>
                                {weekDay}
                            </span>
                        </Checkbox.Root>    )
                })}

            </div>

            <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
                <Check size={20} weight="bold"/>
                Confirmar
            </button>
        </form>
    )
}