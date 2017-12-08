// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
import './prism.css'

// Images
import fastlyLogo from '../assets/fastly-logo-white.png'

const colors = {
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#D8315B',
  quarternary: '#CECECE'
}

const fonts = {
  primary: 'Montserrat',
  secondary: 'Road Rage'
}

const theme = createTheme(colors, fonts)

const dangerStyle = {
  color: colors.tertiary,
  fontFamily: fonts.secondary
}

const bs = (factor = 1) => `${15 * factor}px`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={3} lineHeight={1.1} caps textColor="primary">
            Just Enough FP to be a{' '}
            <span
              style={{
                ...dangerStyle,
                fontSize: '1.25em',
                textShadow: '1px 1px white'
              }}
            >
              Danger
            </span>{' '}
            to Yourself and Coworkers
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading
            size={4}
            textColor="primary"
            textFont="secondary"
            caps
            style={{
              marginBottom: bs(4)
            }}
          >
            Who Am I?
          </Heading>
          <Heading
            size={2}
            textColor="secondary"
            style={{
              marginBottom: bs()
            }}
          >
            Kyle Shevlin
          </Heading>
          <Text textColor="secondary" style={{ marginBottom: bs(4) }}>
            Senior Software Engineer
          </Text>
          <Image src={fastlyLogo} width="25%" />
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={4} textColor="secondary">
            A <span style={dangerStyle}>brief</span> anecdote
          </Heading>
          <Text>About the inspiration for the title</Text>
        </Slide>

        <Slide>
          <Text>
            New job, I'm perusing the code base when I
            find this...
          </Text>
        </Slide>

        <Slide>
          <CodePane lang="js" source={require('raw-loader!../assets/inspiration.example')} style={{fontSize: '1em' }} />
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
        >
          <BlockQuote>
            <Quote textSize="1.75em" style={{ lineHeight: 1.2 }}>
              When I was a child, I [wrote imperative code]. When I
              became a[n adult], I set aside childish things.
            </Quote>
            <Cite
              textFont="secondary"
              style={{
                marginBottom: bs(4)
              }}
            >
              St. Paul - 1 Corinthians 13:11
            </Cite>
            <Text textSize=".75em" textColor="primary">
              *modified for gender inclusivity and humor
            </Text>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
