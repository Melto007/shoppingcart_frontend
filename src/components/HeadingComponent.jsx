function HeadingComponent(props) {
    const { content} = props

    return (
        <>
            <h1 {...props}>
                {content}
            </h1>
        </>
    )
}

export default HeadingComponent