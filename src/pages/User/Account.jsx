import {
    useState
} from 'react'
import {
    Tabs,
    Tab,
    Card,
    CardBody,
    Radio,
    RadioGroup,
    CardFooter
} from "@nextui-org/react"
import InputComponent from "../../components/InputComponent"
import ButtonComponent from "../../components/ButtonComponent"
import RadioComponent from '../../components/RadioComponent'

function Account() {
    const [ editForm, setEditForm ] = useState(false)

    function onHandleEdit() {
        setEditForm(!editForm)
    }

    return (
        <>
            <div className="max-w-lg m-auto">
                <Tabs
                    color="danger"
                    variant="underlined"
                    className="font-bold"
                >
                    <Tab key="account" title="Account">
                        <Card
                            className="rounded-lg"
                        >
                            <CardBody>
                                <div className="mb-4 md:mb-5">
                                    <InputComponent
                                        size="md"
                                        label="firstname"
                                        isEdit={editForm}
                                        defaultValue={!editForm && "shehin"}
                                    />
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <InputComponent
                                        size="md"
                                        label="lastname"
                                        isEdit={editForm}
                                        defaultValue={!editForm && "melto"}
                                    />
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <RadioComponent
                                        content={['male', 'female']}
                                        isEdit={editForm}
                                    />
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <InputComponent
                                        size="md"
                                        label="email"
                                        isEdit={editForm}
                                        defaultValue={!editForm && "meltosm8@gmail.com"}
                                    />
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <InputComponent
                                        size="md"
                                        label="mobile number"
                                        type="number"
                                        isEdit={editForm}
                                        defaultValue={!editForm && "7418108810"}
                                    />
                                </div>
                            </CardBody>
                            <CardFooter className="flex flex-col gap-2">
                                <ButtonComponent
                                    content="save"
                                    size="md"
                                    radius="full"
                                    className="w-full font-bold"
                                    color="danger"
                                />
                                <ButtonComponent
                                    content={`${editForm ? 'cancel' : 'edit'}`}
                                    size="md"
                                    radius="full"
                                    className="w-full font-bold"
                                    color={`${editForm ? 'danger' : 'primary'}`}
                                    onClick={onHandleEdit}
                                />
                            </CardFooter>
                        </Card>
                    </Tab>
                    <Tab key="order" title="Order">
                        <Card
                            className="rounded-none"
                        >
                            <CardBody>

                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default Account