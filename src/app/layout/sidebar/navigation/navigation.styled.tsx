import styled from '@emotion/styled';

export const AppNavigation = styled.div`
    margin-top: 45px;
`;

export const NavList = styled.ul`
    padding: 0;
    li {
        border-radius: 0px 23px 0px 24px;
        height: 47px;
        line-height: 47px;
        text-align: left;

        a {
            margin-left: 40px;
            text-decoration: none;
            font-size: ${(props) => props.theme.font.size.xsmall}px;
            color: ${(props) => props.theme.color.white};
            display: block;
            line-height: 47px;

            span {
                margin-left: 12px;
                background: #ffc933;
                border-radius: 9px;
                padding: 1px 12px;
                font-size: 12px;
                color: #2c2c2c;
            }
        }
    }

    li:hover {
        background: rgba(242, 242, 242, 0.1);
    }

    .active-nav {
        background: rgba(242, 242, 242, 0.1);
    }
`;
