import {
    Input
} from "@nextui-org/react"

function InputComponent(props) {
    return (
        <>
            <Input
                variant="bordered"
                size={props.size}
                label={props.label}
                {...props}
            />
        </>
    )
}

export default InputComponent