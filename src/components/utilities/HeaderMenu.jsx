export default function HeaderMenu({ title }){
    return (
        <div>
            <div className="p-8">
                <h3 className="font-bold text-2xl text-color-white border-l-[7px] border-color-blue pl-2">{title}</h3>
            </div>
        </div>
    )
}