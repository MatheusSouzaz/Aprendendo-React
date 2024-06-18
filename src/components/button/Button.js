import './Button.css'

const ButtonLabel = ({label}) => {
    
const showLabel = ()=>{
    alert(`A label desse botão é: ${label}`)
}    

    
    return (
        <button className='btn' onClick={showLabel}>{label}</button>
    )
}



export default ButtonLabel