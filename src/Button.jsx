export default function Button({ children, outline, className, cls, onClick }) {
    let _className = `theme-gradient py-[2px] p-[2px] rounded-[1000px] text-[12px] relative cursor-default ${cls || ""}`;

    return (
      <div onClick={onClick} className={_className}>
        <div className={`${outline? "bg-[black]" : ""} rounded-[1000px]`}>
        <div className={`${outline? "theme-gradient-2 py-2 px-5 h-full w-full rounded-[1000px]": "py-2 px-5"}`}>
          <span className={`${outline? "theme-gradient-text": ""} ${className} text-center`}>{children}</span>
        </div>
        </div>
      </div>
    );
  }
  