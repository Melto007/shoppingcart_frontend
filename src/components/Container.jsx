function Container({ children }) {
    return (
        <>
            <div className="max-w-[1600px] h-auto mx-auto">
                {children}
            </div>
        </>
    )
}

export default Container