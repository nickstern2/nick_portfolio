import React, { FC } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { paletteNavBar, theme } from "./Theme";

export const ParticlesBackground: FC = () => {
  // TODO: Delete if not used
  const [init, setInit] = React.useState(false);

  // this should be run only once per application lifetime
  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}>
      <Particles
        id='tsparticles'
        options={{
          autoPlay: true,
          background: {
            color: {
              value: paletteNavBar.main,
              // value: theme.palette.primary.dark,
              // value: "#D0E2FF", //really light blue
              // value: "#AFDBD2", //Greenish(I also like)
              // value: "#513e23", //Orange(I like it)
              // value: "#333333", //grey(I like it)
              // value: "#0d47a1",
              // value: "#FAFAFA", //off white
            },
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                // value: "black",
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          clear: true,
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          detectRetina: true,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
            },
          },
          // TODO: update density
          particles: {
            number: {
              value: 220,
              density: {
                enable: true,
              },
            },
            color: {
              value: "#53D3D5", //neon green
              // value: "#ff0000",//red
              animation: {
                enable: true,
                // color change speed
                speed: 20,
                sync: true,
              },
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
            },
            size: {
              value: { min: 2, max: 5 },
            },
            links: {
              enable: true,
              distance: 150,
              // color:'rgba(10, 25, 47, 1)',
              color: "#ffffff",
              // color: "#ffffff",
              opacity: 0.6,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
