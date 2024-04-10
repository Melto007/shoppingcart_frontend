import {
    useEffect,
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
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../features/profileSlice'

function Account() {
    const [ editForm, setEditForm ] = useState(false)
    const dispatch = useDispatch()
    const profileSlice = useSelector(state => state.profileSlice)
    const { profile } = profileSlice

    useEffect(() => {
        dispatch(getProfile())
    }, [])

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
                        <div className='h-[80vh]'>
                            <Card
                                className="rounded-lg"
                            >
                                <CardBody>
                                    <div className="mb-4">
                                        <InputComponent
                                            size="md"
                                            label="firstname"
                                            isEdit={editForm}
                                            defaultValue={!editForm && "shehin"}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <InputComponent
                                            size="md"
                                            label="lastname"
                                            isEdit={editForm}
                                            defaultValue={!editForm && "melto"}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <RadioComponent
                                            content={['male', 'female']}
                                            isEdit={editForm}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <InputComponent
                                            size="md"
                                            label="email"
                                            isEdit={editForm}
                                            defaultValue={!editForm && "meltosm8@gmail.com"}
                                        />
                                    </div>
                                    <div className="mb-4">
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
                        </div>
                    </Tab>
                    <Tab key="order" title="Order">
                        <Card
                            className="rounded-lg"
                        >
                            <CardBody className='flex flex-col gap-2'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span>No.</span>
                                    </div>
                                    <div>
                                        <span>Product</span>
                                    </div>
                                    <div>
                                        <span>Quantity</span>
                                    </div>
                                    <div>
                                        <span>Status</span>
                                    </div>
                                    <div>
                                        <span>Total</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span>1</span>
                                    </div>
                                    <div>
                                        <span>Product 1</span>
                                    </div>
                                    <div>
                                        <span>2</span>
                                    </div>
                                    <div>
                                        <span>Delivered</span>
                                    </div>
                                    <div>
                                        <span>400000</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default Account