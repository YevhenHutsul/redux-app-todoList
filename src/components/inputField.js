export const InputField = ({inputValue,setInputValue, addTask}) => {
    return (
        <label className='input-group max-size'>
                <input
                    className='form-control'
                    placeholder='New task'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <button
                    onClick={() => addTask()}
                    className='btn btn-outline-secondary'
                >task
                </button>
            </label>
    )
}