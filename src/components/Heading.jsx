function Heading(props) {
    const { content} = props

    return (
        <>
            <h1 {...props}>
                {content}
            </h1>
        </>
    )
}

export default Heading