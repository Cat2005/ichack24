import styled from 'styled-components';
import SubmitButton from './SubmitButton';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: #e9e9e9;
  color: #101010;
  padding: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 1rem;
  
`;

const Footer = () => {
  return (
    <FooterContainer>
        <SubmitButton buttonText={'Regenerate Questions'} />
        <SubmitButton buttonText={'Send Quiz'} />
    </FooterContainer>
  );
};

export default Footer;