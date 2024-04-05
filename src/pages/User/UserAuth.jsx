
import {
    Tabs,
    Tab,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Input
} from '@nextui-org/react'
import HeadingComponent from '../../components/HeadingComponent'
import InputComponent from '../../components/InputComponent'
import ButtonComponent from '../../components/ButtonComponent'

function UserAuth() {
    return (
        <>
            <div className='flex flex-col w-full h-[80vh] px-2'>
                <Card
                    className='max-w-full m-auto'
                >
                    <CardBody>
                        <Tabs
                            color="danger"
                            className='font-bold'
                        >
                            <Tab key="login" title="Login">
                                <form className='flex flex-col gap-4'>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Email"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Password"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <ButtonComponent
                                            fullWidth="true"
                                            color="danger"
                                            content="Login"
                                            className="font-bold"
                                        />
                                    </div>
                                </form>
                            </Tab>
                            <Tab key="register" title="Register">
                                <form className='flex flex-col gap-4'>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="UserName"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Phone Number"
                                            type="number"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Email"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Password"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Confirm Password"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <ButtonComponent
                                            fullWidth="true"
                                            color="danger"
                                            content="Register"
                                            className="font-bold"
                                        />
                                    </div>
                                </form>
                            </Tab>
                            <Tab key="company" title="Company Register">
                                <form className='flex flex-col gap-4'>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="UserName"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Email"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Company Name"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Phone Number"
                                            type="number"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Password"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            size="md"
                                            label="Confirm Password"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <ButtonComponent
                                            fullWidth="true"
                                            color="danger"
                                            content="Register"
                                            className="font-bold"
                                        />
                                    </div>
                                </form>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default UserAuth