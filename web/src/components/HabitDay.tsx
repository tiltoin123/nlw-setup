import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { ProgressBar } from './ProgressBar'

interface HabitDayProps{
    completed:number
    amount:number
}

export function HabitDay({completed,amount}:HabitDayProps){
    const CompletePercent = Math.round((completed/amount)*100)

    return(
        <Popover.Root>
            <Popover.Trigger className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg",
            {'bg-zinc-900 border-zinc-800':CompletePercent ===0 },
            {'bg-violet-900 border-violet-700':CompletePercent >= 0 && CompletePercent < 20},
            {'bg-violet-800 border-violet-600':CompletePercent >= 20 && CompletePercent < 40},
            {'bg-violet-700 border-violet-500':CompletePercent >= 40 && CompletePercent < 60},
            {'bg-violet-600 border-violet-400':CompletePercent >= 60 && CompletePercent < 80},
            {'bg-violet-500 border-violet-400':CompletePercent >= 80})}/>
            <Popover.Portal>
                <Popover.Content className='min-w-[320] p-6 rounded-2xl flex bg-zinc-900 flex-col'>
                    <span className='font-semibold text-zinc-400'>terça-feira</span>
                    <span className='mt-1 font-extrabold leading-tight text-3xl'>batatatata</span>
                    <ProgressBar progress={7}/>
                    <Popover.Arrow height={8} width={24} className='fill-zinc-900'/>
                </Popover.Content>

            </Popover.Portal>
        </Popover.Root>
    )
}