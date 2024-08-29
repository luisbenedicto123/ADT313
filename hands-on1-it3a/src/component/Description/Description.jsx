import './Description.css';

function Description({description}) {
    return (
        <div>
            <h1 className='text-gray'> {description}</h1>
        </div>
    )
}

export default Description;