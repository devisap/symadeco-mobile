const getFullDate = (dateObj) => {
    const date  = dateObj.getDate()
    const month = getMonthName(dateObj.getMonth())
    const year  = dateObj.getFullYear()

    return `${date} ${month} ${year}`
}

const getMonthName = (month) => {
    let res
    switch(month){
        case 0:
            res = "Januari"
            break;
        case 1:
            res = "Februari"
            break;
        case 2:
            res = "Maret"
            break;
        case 3:
            res = "April"
            break;
        case 4:
            res = "Mei"
            break;
        case 5:
            res = "Juni"
            break;
        case 6:
            res = "Juli"
            break;
        case 7:
            res = "Agustus"
            break;
        case 8:
            res = "September"
            break;
        case 9:
            res = "Oktober"
            break;
        case 10:
            res = "November"
            break;
        case 11:
            res = "Desember"
            break;
    }
    return res
}

const getListMonth = () => {
    return [
        {
            label: 'Januari',
            value: 1,
        },
        {
            label: 'Februari',
            value: 2,
        },
        {
            label: 'Maret',
            value: 3,
        },
        {
            label: 'April',
            value: 4,
        },
        {
            label: 'Mei',
            value: 5,
        },
        {
            label: 'Juni',
            value: 6,
        },
        {
            label: 'Juli',
            value: 7,
        },
        {
            label: 'Agustus',
            value: 8,
        },
        {
            label: 'September',
            value: 9,
        },
        {
            label: 'Oktober',
            value: 10,
        },
        {
            label: 'November',
            value: 11,
        },
        {
            label: 'Desember',
            value: 12,
        }
    ]
}

export {
    getFullDate, getListMonth
}