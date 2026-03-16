


export function Loader() {
    return (
        <div style={{zIndex: 9999999}} className={`flex items-center justify-center h-screen w-full bg-black fixed left-0 top-0 transition-opacity duration-700  pointer-events-none`}>
            <div className="loader" />
        </div>
    )
}