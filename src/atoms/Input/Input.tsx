// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { InputProps } from "./Input.types";

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        leftSlot,
        rightSlot,
        textAlign,
        variant,
        disabled,
        placeholder,
        value,
        form,
        name,
        min,
        max,
        step,
        type,
        readOnly,
        required,
        onChange,
        onBlur,
        onFocus,
    } = props;
    return (
        <Container
            disabled={disabled}
            variant={variant || "focus"}
            textAlign={textAlign || "left"}
            form={form}
        >
            {leftSlot ? <LeftSlot>{leftSlot}</LeftSlot> : null}
            <StyledInput
                placeholder={placeholder}
                disabled={disabled}
                data-testid="input"
                value={value}
                form={form}
                name={name}
                readOnly={readOnly}
                required={required}
                min={min}
                max={max}
                step={step}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                ref={ref}
            />
            {rightSlot ? <RightSlot>{rightSlot}</RightSlot> : null}
        </Container>
    );
});
Input.displayName = "Input";

export default Input;

interface ContainerProps {
    disabled?: boolean;
    variant: InputProps["variant"];
    textAlign: InputProps["textAlign"];
}

const Container = styled.label<ContainerProps>`
    position: relative;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 10px 18px;
    border-radius: 12px;
    border: 1px solid;
    text-align: ${(props) => props.textAlign};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};

    ${({ disabled, theme, variant }) => {
        if (disabled) {
            return `
                border-color: ${theme.colors.focus.active};
                background-color: ${theme.colors.cell.secondary};
                color: ${theme.colors.text.tertiary};
                `;
        } else if (variant === "focus") {
            return `
                border-color: ${theme.colors.focus.active};
                background-color: ${theme.colors.cell.primary};
                color: ${theme.colors.focus.text};
                `;
        } else if (variant === "alert") {
            return `
                border-color: ${theme.colors.alert.active};
                background-color: ${theme.colors.alert.cell};
                color: ${theme.colors.alert.text};
                `;
        } else if (variant === "danger") {
            return `
                border-color: ${theme.colors.danger.active};
                background-color: ${theme.colors.danger.cell};
                color: ${theme.colors.danger.text};
                `;
        }
    }}
`;

const StyledInput = styled.input`
    width: 100%;
    font-size: 0.9rem;
    font-family: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    outline: none;
    background: transparent;
    color: inherit;
    text-align: inherit;
    &:disabled {
        cursor: not-allowed;
    }
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type="number"] {
        -moz-appearance: textfield;
    }
`;

const LeftSlot = styled.div`
    margin-right: 10px;
`;

const RightSlot = styled.div`
    margin-left: 10px;
`;
