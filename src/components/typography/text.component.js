import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary}
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    font-size: ${theme.fontSizes.error};
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.medium};
`;

const title = (theme) => `
    font-family: ${theme.fonts.heading}
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.ui.success};
    padding-bottom: ${theme.space[1]};
`;

const heading = (theme) => `
    font-family: ${theme.fonts.heading}
    font-size: ${theme.fontSizes.h4};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.primary};
    padding-bottom: ${theme.space[1]};
`;

const subHeading = (theme) => `
    font-family: ${theme.fonts.heading}
    font-size: ${theme.fontSizes.h5};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.primary};
    padding-bottom: ${theme.space[1]};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  title,
  heading,
  subHeading,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
