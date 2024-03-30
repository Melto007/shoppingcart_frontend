import Icons from "../../components/Icons"
import Paragraph from "../../components/Paragraph"

function Footerpage() {
    return (
        <>
            <div
                className="flex justify-between items-center bg-slate text-zinc px-2 py-2 max-w-8xl">
                <Paragraph
                    content="This site is owned by melto.sm"
                    className="text-[0.6rem] xxs:text-[0.8rem] md:text-[0.9rem]"
                />
                <div className="flex gap-2">
                    <a href="https://github.com/Melto007" target="_blank">
                        <div className="bg-zinc p-2 rounded-full">
                                <Icons
                                    name="github"
                                />
                        </div>
                    </a>
                    <a href="https://twitter.com/melto_official" target="_blank">
                        <div className="bg-zinc p-2 rounded-full">
                                <Icons
                                    name="twitter"
                                />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/shehin-melto-94887a192/" target="_blank">
                        <div className="bg-zinc p-2 rounded-full">
                                <Icons
                                    name="linkedin"
                                />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footerpage