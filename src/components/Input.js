import './Input.css'

const Input = ({lable, ...rest}) => {
    return (
        <div className='field'>
            <label>{lable}</label>
        <input {...rest}/>
        </div>
    )
}
export default Input