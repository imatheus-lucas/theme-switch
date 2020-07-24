import React, { useContext } from 'react';

import { Container } from './styles';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';

import { shade } from 'polished'

interface Props {
  toggletheme(): void;
}
const Header: React.FC<Props> = ({ toggletheme }) => {

  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      <h1>Estudo de temas da Rockeseat</h1>

      <Switch
        onChange={toggletheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
}

export default Header;