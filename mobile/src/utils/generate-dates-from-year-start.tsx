import dayjs from "dayjs"


export function generateRangeDatesFromYearStart(){
    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let compareDate = firstDayOfTheYear

    while (compareDate.isBefore(today)){
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1,'day')
    }
    return(
        dates
    )
}
//<div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>