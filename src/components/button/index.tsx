import React from 'react';

import './style.scss';

interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    height?: string;
    width?: string;
    rel: string;
    href?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
}

const Button: React.FC<ButtonProps> = ({
    text,
    type = 'button',
    onClick,
    disabled = false,
    className = '',
    height = '6em',
    width = '20em',
    rel,
    href,
    target,
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (onClick) {
            event.preventDefault();
            onClick();
        }
    };

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn-gradient ${className}`}
                style={{ height: `${height}`, width: `${width}` }}
                aria-label={text}
                role='button'
                tabIndex={0}
                onClick={handleClick}
            >
                <span className='btn-gradient-text'>{text}</span>
            </a>
        );
    } else {
        return (
            <button
                className={`btn-gradient ${className}`}
                type={type}
                onClick={handleClick}
                disabled={disabled}
                style={{ height: `${height}`, width: `${width}` }}
                aria-label={text}
                role='button'
                tabIndex={0}
            >
                <span className='btn-gradient-text'>{text}</span>
            </button>
        );
    }
};

export default Button;
