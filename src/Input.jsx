import { ArvoText, WorkText } from "./Text"

export default function Input({
  type,
  placeholder,
  className,
  className_,
  formName,
  id,
  value,
  onChange,
  title,
}) {
  return (
    <div className={`w-full flex flex-col my-3 ${className_}`}>
      <WorkText className={`mb-2`}>{title}</WorkText>
      <input
        className={`text-white font-medium text-xs placeholder-dark-grey-3 bg-dark-grey-2 py-4 px-3 rounded-lg ${className}`}
        placeholder={placeholder}
        type={type}
        name={formName}
        id={id}
        value={value}
        style={{
          border: "0",
          outline: "none",
        }}
        onChange={onChange}
      />
    </div>
  );
}





