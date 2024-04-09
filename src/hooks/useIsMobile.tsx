import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

type GetIsMobileReturn = {
  isMobile: boolean;
};
/**
 * Hook to determine if screen size is mobile.
 * @param mobileBreakpoint Any MUI Breakpoint. Default is 'sm'
 * @returns isMobile boolean
 */
export const useGetIsMobile = (
  mobileBreakpoint: Breakpoint = "sm"
): GetIsMobileReturn => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(mobileBreakpoint), {
    noSsr: true,
  });

  return { isMobile };
};
