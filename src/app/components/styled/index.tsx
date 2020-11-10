import styled from '@emotion/styled';

export const ReferFormField = styled.div`
    position: relative;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    transition: all 0.5s ease-in-out;

    :first-of-type {
        margin-right: 20px;
    }

    .is-focused {
        font-size: 10px;
        margin-bottom: 8px;
        transform: translateY(-8px);
        color: #3c498a;
    }

    .is-error {
        color: #f04d46;
        border-color: #f04d46 !important;
    }

    .err-msg {
        font-size: 10px;
        color: #f04d46;
        margin-top: -4px;
        margin-bottom: 10px;
    }

    input {
        width: 328px;
        border: 1px solid rgba(60, 73, 138, 0.42);
        border-radius: 4px;
        margin-bottom: 12px;
        padding: 24px 16px 8px 16px;
        outline: 0;
        color: #2c2c2c;
        font-size: 14px;
        line-height: 17px;

        :focus {
            border-color: #3c498a;
            font-weight: 500;
        }

        @media ${(props) => props.theme.breakpoints.phone} {
            width: 93.5%;
        }

        @media ${(props) => props.theme.breakpoints.tablet} {
            width: 90%;
        }
    }

    label {
        position: absolute;
        left: 16px;
        top: 16px;
        font-size: 14px;
        font-weight: 500;
        color: #555555;
        transition: all 0.2s ease-in-out;
    }

    .form-select-wrapper {
        width: 100%;
    }

    svg {
        position: absolute;
        right: 16px;
        top: 22px;
        z-index: 1;
    }
`;
