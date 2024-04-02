import {
    useState
} from 'react'
import { RadioGroup, Radio } from "@nextui-org/react";

function RadioComponent(props) {

    const [selected, setSelected] = useState(props.content[0]);

    let disable = false

    if(!props.isEdit) {
        disable = true
    }

    return (
        <>
            <RadioGroup
                label="Your Gender"
                isDisabled={disable}
                value={selected}
                onValueChange={setSelected}
            >
                {props.content.map((item, idx) => (
                    <Radio value={item} key={idx}>{item}</Radio>
                ))}
            </RadioGroup>
        </>
    )
}

export default RadioComponent