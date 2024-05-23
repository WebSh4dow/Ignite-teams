
import styled from "styled-components/native";
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme })=> theme.COLORS.GRAY_600};
  padding: 25px;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme})=> ({
  color: theme.COLORS.GREEN_700
}))``;
