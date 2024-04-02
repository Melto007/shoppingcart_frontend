import {
    Input
} from "@nextui-org/react"

function InputComponent(props) {

    let input = <Input variant="bordered" size={props.size} label={props.label} {...props} />

    if(!props.isEdit) {
        input = <Input isDisabled variant="bordered" size={props.size} label={props.label} {...props} />
    }

    return (
        <>
            {input}
        </>
    )
}

export default InputComponent