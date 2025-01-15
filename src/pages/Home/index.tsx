import imageCoffee from '../../assets/ImageCoffee.svg'
export function Home(){
    return (
       <>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <img src={imageCoffee} alt="Imagem de um café"/>
       </>
    )
}