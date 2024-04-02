
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

function Account() {
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
                                    />
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <InputComponent
                                        size="md"
                                        label="lastname"
                                    />
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <RadioGroup
                                        label="Your Gender"
                                    >
                                        <Radio value="male">Male</Radio>
                                        <Radio value="female">Female</Radio>
                                    </RadioGroup>
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <InputComponent
                                        size="md"
                                        label="email"
                                    />
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <InputComponent
                                        size="md"
                                        label="mobile number"
                                        type="number"
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
                                    content="edit"
                                    size="md"
                                    radius="full"
                                    className="w-full font-bold"
                                    color="primary"
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