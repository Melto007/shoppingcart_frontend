
import {
    Tabs,
    Tab,
    Card,
    CardBody
} from "@nextui-org/react"

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
                            className="rounded-none"
                        >
                            <CardBody>

                            </CardBody>
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