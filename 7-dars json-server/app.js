class Car{
    constructor(engine,color,price,year){
        this.engine=engine,
        this.color=color,
        this.price=price,
        this.year=year
    }

    info(){
        console.log(`this car was produced in ${year}`)

    }
}


const Matiz=new Car(700,'white',5000,2014);

console.log(Matiz)


class eCar extends Car{
    constructor(engine,color,price,year,ePower){
        super(engine,color,price,year)
        this.ePower=ePower
    }
    run(){
        console.log('car is running')
    }
}

const Tesla= new eCar(1000,'gray',20000,2020,3000)

console.log(Tesla)