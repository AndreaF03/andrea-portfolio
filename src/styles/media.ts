import { css } from 'styled-components';

export const media = {
  sm: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      ${css(...args)}
    }
  `,
  md: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      ${css(...args)}
    }
  `,
  lg: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      ${css(...args)}
    }
  `,
  xl: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      ${css(...args)}
    }
  `,
};
