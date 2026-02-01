export default function HeaderMenu({ title }){
    return (
        <div>
            <div className="p-6 px-6">
                <h3 className="font-bold text-xl md:text-2xl text-color-white border-l-[6px] border-color-blue pl-2">{title}</h3>
            </div>
        </div>
    )
}