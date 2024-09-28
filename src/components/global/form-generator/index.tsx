import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import React from "react"
import { ErrorMessage } from "@hookform/error-message"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
type FormGeneratorType = {
    type?: "text" | "email" | "password" | "number"
    inputType: "select" | "input" | "textarea"
    options?: { value: string; label: string; id: string }[]
    label?: string
    placeholder: string
    register: UseFormRegister<any>
    name: string
    errors: FieldErrors<FieldValues>
    lines?: number
}
const FormGenerator = ({
    inputType,
    errors,
    name,
    placeholder,
    register,
    label,
    lines,
    options,
    type,
}: FormGeneratorType) => {
    switch (inputType) {
        case "input":
            return (
                <Label
                    className="flex flex-col gap-2"
                    htmlFor={`input-${label}`}
                >
                    {label && label}
                    <Input
                        id={`input-${label}`}
                        type={type}
                        placeholder={placeholder}
                        className="bg-themeBlack border-themeGray text-themeGray"
                        {...register(name)}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => (
                            <p className="text-red-400 mt-2">
                                {message === "Required" ? "" : message}
                            </p>
                        )}
                    />
                </Label>
            )
        case "select":
            return (
                <Label
                    htmlFor={`select-${label}`}
                    className="flex flex-col gap-2"
                >
                    {label && label}
                    <select
                        id={`select-${label}`}
                        className="w-full bg-transparent border-[1px] p-3 rounded-lg"
                        {...register(name)}
                    >
                        {options?.length &&
                            options.map((option) => (
                                <option
                                    value={option.value}
                                    key={option.id}
                                    className="dark:bg-muted"
                                >
                                    {option.label}
                                </option>
                            ))}
                    </select>
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => (
                            <p className="text-red-400 mt-2">
                                {message === "Required" ? "" : message}
                            </p>
                        )}
                    />
                </Label>
            )
        case "textarea":
            return (
                <Label
                    className="flex flex-col gap-2"
                    htmlFor={`input-${label}`}
                >
                    {label && label}
                    <Textarea
                        className="bg-themeBlack border-themeGray text-themeTextGray"
                        id={`input-${label}`}
                        placeholder={placeholder}
                        {...register(name)}
                        rows={lines}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => (
                            <p className="text-red-400 mt-2">
                                {message === "Required" ? "" : message}
                            </p>
                        )}
                    />
                </Label>
            )
        default:
            return <></>
    }
}

export default FormGenerator
