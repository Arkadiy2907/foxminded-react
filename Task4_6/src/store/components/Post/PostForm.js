import React from "react"
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { postForm } from "../../../api";
import { addFormAction } from "../../action/Action"

const PostForm = () => {
    const [formData, setFormData] = React.useState({})
    const dispatch = useDispatch()
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({
        mode: "all"
    })

    const showInputValue = event => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    let randomNum = () => {
        return Math.round(Math.random() * 10000)
    }

    const [formId, setFormId] = React.useState(randomNum())

    const onSubmit = data => {
        dispatch(postForm(formData))
        dispatch(addFormAction(data))
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="allForm">
                    <input type="hidden" {...register(`id`)} value={formId} />
                    <input type="hidden" {...register(`userId`)} value={formData.userId} />
                    <div className="titleForm">
                        <p>please input TITLE: </p>
                        <input
                            type="text"
                            name="titleInput"
                            onChange={showInputValue}
                            value={formData.title}
                            {...register(`title`, {
                                required: "This field is required",
                                minLength: {
                                    value: 2,
                                    message: "min 2 characters"
                                },
                                maxLength: {
                                    value: 75,
                                    message: "max 75 characters"
                                }
                            })}
                        />
                        <div className="errors">
                            {errors.title && <span>{errors.title.message}</span>}
                        </div>
                    </div>
                    <div className="bodyForm">
                        <p>please input POST: </p>
                        <textarea
                            type="text"
                            name="body"
                            onChange={showInputValue}
                            value={formData.body}
                            {...register(`body`, {
                                required: "This field is required",
                                minLength: {
                                    value: 2,
                                    message: "min 2 characters"
                                },
                                maxLength: {
                                    value: 165,
                                    message: "max 165 characters"
                                }
                            })}
                        />
                        <div className="errors">
                            {errors.body && <span>{errors.body.message}</span>}
                        </div>
                    </div>
                </div>
                <div className="btn">
                    <button type="submit" disabled={!isValid} onClick={() => setFormId(randomNum())}>submit</button>
                </div>
            </form>
        </>
    )
}

export default PostForm;