import clsx from "clsx";
import {
    FieldValues,
    FieldErrors,
    UseFormRegister
} from 'react-hook-form'

interface InputProps {
    label: string;
    id: string;
    type: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}
const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
    }) => {
        return (
            <div>
                <label className='block text-sm py-0 font-medium leading-6 text-gray-900'
                    htmlFor={id}>{label}</label>
                <div className='mt-1'>
                    <input 
                        type={type}
                        id={id}
                        disabled={disabled}
                        autoComplete={id}
                        required={required}
                        {...register(id, {required})}
                        className={clsx(`
                        form-input 
                        w-full 
                        block
                        rounded-lg 
                        border-0 
                        py-3 
                        shaddow-sm 
                         text-gray-900 
                        ring-1 
                        ring-inset 
                        ring-gray-300 
                        placeholder: text-gray-900 
                        focus: ring-2 
                        focus: ring-inset 
                        focus:text-sky-900
                        sm: text-sm 
                        sm: leading-6`,
                        errors[id] && "focus: ring-rose-500",
                        disabled && "focus: opacity-50 cursor-default")}
                    />
                </div>
            </div>
        )
    }

export default Input;