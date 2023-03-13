const ValidationErrors = ({ulClassName, liClassName, messages}) => {
    const mappedMessages = messages.map(message => <li className={liClassName}>{message}</li>)
    return <ul className={ulClassName}>
        {mappedMessages}
    </ul>
}

export default ValidationErrors;