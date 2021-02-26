class Commands{
    get WORK(){
        return [
            'поход в столовую',
            'работа крупье',
            'работа грабитель'
        ]
    }
    get END_WORK(){
        return 'завершить работу'
    }

    get EAT(){
        return [
            'покормить жабу'
        ]
    }
}

module.exports = new Commands()