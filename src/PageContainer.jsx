export default function PageContainer ({children, className}){
    return (
        <div className={`xl:px-20 px-8 ${className} max-w-[2200px]`}>
            {children}
        </div>
    )
}