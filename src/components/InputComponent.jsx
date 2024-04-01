import {
    Input
} from "@nextui-org/react"

function InputComponent(props) {
    return (
        <>
            <Input
                variant="bordered"
                size={props.size}
                {...props}
            />
        </>
    )
}

export default InputComponent