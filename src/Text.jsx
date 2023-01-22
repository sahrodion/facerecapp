export function ArvoText({block, className, children}){
    return (
        <span className={`arvo-font ${block ? "block" : ""} ${className}`}>
            {children}
        </span>
    )
}

export function WorkText({block, className, children, id }){
    return (
        <span id={id} className={`work-font ${block ? "block" : ""} ${className}`}>
            {children}
        </span>
    )
}

export function PageTitle({title, className}){
    return (
        <ArvoText className={`lg:text-[40px] text-[20px] font-bold ${className}`}>
            {title}
        </ArvoText>
    )
}
export function SubTitle({title, className}){
    return (
        <ArvoText block className={`lg:text-[20px] text-[12px] font-bold ${className}`}>
            {title}
        </ArvoText>
    )
}