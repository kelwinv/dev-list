import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
  Container,
  WelcomeLetter,
  BemvindoIcon,
  DragUpIcon,
  Content,
  Titles,
  BoxContent,
  Box,
  DevListIcon,
  AddDevIcon,
} from "./styles";

const Home: React.FC = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return (
    <Container ref={constraintsRef}>
      <motion.div
        drag="y"
        style={{ y: 0 }}
        className="DragContainer"
        dragConstraints={{
          top: -window.innerHeight / 1.2,
          bottom: -30,
        }}
        dragElastic={0.1}
      >
        <WelcomeLetter>
          <BemvindoIcon />
          <DragUpIcon />
        </WelcomeLetter>
      </motion.div>
      <Content>
        <Titles>
          <h1>LISTA DEV</h1>
          <p>
            Um lugar onde você pode compartilhar sua conta do github e conectar
            com outros devs
          </p>
        </Titles>
        <BoxContent>
          <Box>
            <Link to="/devList">
              <DevListIcon />
            </Link>
          </Box>
          <Box>
            <Link to="/adddev">
              <AddDevIcon />
            </Link>
          </Box>
        </BoxContent>
      </Content>
    </Container>
  );
};

export default Home;
