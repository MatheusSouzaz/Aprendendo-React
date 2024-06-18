import './paragrafo.css'

const Paragraph = ({children, color, textTransf})=>{
    return(
        <p className='paragraph' style={{color: color, textTransform: textTransf}}>{children}</p>
    )
}

Paragraph.defaultProps ={
color:'red',
textTransf: 'uppercase'
}


export default Paragraph