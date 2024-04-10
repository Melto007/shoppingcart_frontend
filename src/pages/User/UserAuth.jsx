import {
    useState
} from 'react'
import {
    Tabs,
    Tab,
    Card,
    CardBody,
    Input
} from '@nextui-org/react'
import ButtonComponent from '../../components/ButtonComponent'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../features/userSlice'
import { Navigate } from 'react-router-dom'

function UserAuth() {
    const [ selected, setSelecter ] = useState("login")
    const { register, handleSubmit, formState: { errors } } = useForm()

    const dispatch = useDispatch()
    const userSlice = useSelector(state => state.userSlice)
    const { issuccess, isloading, iserror, user, isAuthenticated } = userSlice

    function onHandleSubmit(data) {
        dispatch(loginUser(data))
    }

    if(isAuthenticated) {
        return <Navigate to='/' />
    }

    console.log(issuccess, isloading, iserror, user, isAuthenticated)

    return (
        <>
            <div className='flex flex-col w-full h-[80vh] px-2'>
                <Card
                    className='max-w-full m-auto'
                >
                    <CardBody>
                        <Tabs
                            fullWidth
                            size="md"
                            color="danger"
                            className='font-bold'
                            selectedKey={selected}
                            onSelectionChange={setSelecter}
                        >
                            <Tab key="login" title="Login">
                                <form className='flex flex-col gap-4'>
                                    <div>
                                        <Input
                                            size="md"
                                            label="Email"
                                            variant="bordered"
                                            {
                                                ...register('email', {
                                                    required: "Email is required",
                                                    validate: {
                                                        maxLength: (v) => v.length <= 50 || "The email should have at most 50 characters",
                                                        matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                                                    },
                                                })
                                            }
                                        />
                                    </div>
                                    {errors.email?.message && (
                                        <div className='mx-2 text-red-500'>
                                            <span className='text-sm'>{errors.email?.message}</span>
                                        </div>
                                    )}
                                    <div>
                                        <Input
                                            type='password'
                                            size="md"
                                            label="Password"
                                            isEdit={true}
                                            {
                                                ...register('password', {
                                                    required: "Password is required"
                                                })
                                            }
                                        />
                                    </div>
                                    {errors.password?.message && (
                                        <div className='mx-2 text-red-500'>
                                            <span className='text-sm'>{errors.password?.message}</span>
                                        </div>
                                    )}
                                    <div>
                                        <ButtonComponent
                                            fullWidth="true"
                                            color="danger"
                                            content="Login"
                                            className="font-bold"
                                            onClick={handleSubmit(onHandleSubmit)}
                                        />
                                    </div>
                                </form>
                            </Tab>
                            <Tab key="register" title="Register">
                                <form className='flex flex-col gap-4'>
                                    <div>
                                        <Input
                                            size="md"
                                            label="UserName"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            size="md"
                                            label="Phone Number"
                                            type="number"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            size="md"
                                            label="Email"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            size="md"
                                            label="Password"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <Input
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
                                        <Input
                                            size="md"
                                            label="UserName"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            size="md"
                                            label="Email"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            size="md"
                                            label="Company Name"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            size="md"
                                            label="Phone Number"
                                            type="number"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            size="md"
                                            label="Password"
                                            isEdit={true}
                                        />
                                    </div>
                                    <div>
                                        <Input
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