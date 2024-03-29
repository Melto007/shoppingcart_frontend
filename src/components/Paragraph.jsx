function Paragraph(props) {
    return (
        <>
            <p {...props}>{props.content}</p>
        </>
    )
}

export default Paragraph