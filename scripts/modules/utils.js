export const getCurrentDateTime=()=>{
    const months=[
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сент',
        'окт',
        'ноя',
        'дек'
    ]

    const weekDays=[
        'воскр',
        'понед',
        'втор',
        'сре',
        'че',
        'пят',
        'суб'
    ]

    const date = new Date();
    const dayOfMonth=date.getDate();
    const month=months[date.getMonth()];
    const year=date.getFullYear();
    const dayOfWeek=weekDays[date.getDay()];

    let hours=date.getHours();
    let minutes =date.getMinutes();

    if(hours<10){
        hours=`0${hours}`
    }
    if(minutes<10){
        minutes=`0${minutes}`
    }

    return { month, year,dayOfMonth,dayOfWeek, hours, minutes}

}