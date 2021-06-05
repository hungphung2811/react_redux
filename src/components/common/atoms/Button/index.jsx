import React from 'react'
import classnames from 'classnames';

function Button(properties) {
    const { children, variant, bg, color, classname,twCustom,
        size, primary, secondary, dark, light, waring, success, error,
        ...props
    } = properties;

    switch (variant) {
        case 'btn-tag':
            return (
                <button
                    {...props}

                    className={
                        classnames(
                            'px-3 py-1 rounded-2xl align-text-top focus:outline-none',
                            [
                                { [`${classname}`]: twCustom },
                                { [`${color}`]: color },
                                { [`${bg}`]: bg },
                                [
                                    { 'px-3 py-1': size === 'small' },
                                    { 'px-5 py-1.5': size === 'medium' },
                                    { 'px-8 py-2.5': size === 'small' },
                                    { 'px-12 py-3': size === 'large' },
                                ],
                                [
                                    { 'bg-blue-500': primary },
                                    { 'bg-gray-500': secondary },
                                    { 'bg-gray-900': dark },
                                    { 'bg-white': light },
                                    { 'bg-yellow-500': waring },
                                    { 'bg-green-500': success },
                                    { 'bg-red-500': error },
                                ]
                            ]
                        )
                    }
                >
                    {children}
                </button>
            )

        default:
            return (
                <button
                    {...props}

                >
                    {children}
                </button>
            )
    }

}

export default Button
