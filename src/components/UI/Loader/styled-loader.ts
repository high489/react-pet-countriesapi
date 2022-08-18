import styled from 'styled-components'
import { IoReload } from 'react-icons/io5';

export const SLoader = styled(IoReload)`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  animation: rotate 2s infinite linear;
  @keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`