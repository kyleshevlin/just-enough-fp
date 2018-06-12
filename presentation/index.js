import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'react-emotion'

// Import Spectacle Core tags
import {
  Appear,
  // BlockQuote,
  // Cite,
  // Code,
  CodePane,
  Deck,
  // Fit,
  Fill,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  // Quote,
  Slide,
  // Table,
  // TableHeaderItem,
  // TableRow,
  // TableItem,
  Text
} from 'spectacle'

// Images
import tweet from '../assets/ryrykubes.jpg'
import pointilism from '../assets/pointilism.jpg'
import impressionism from '../assets/impressionism.jpg'

// Fonts
import roadRage1 from '../assets/RoadRage.woff'
import roadRage2 from '../assets/RoadRage.woff2'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

// eslint-disable-next-line
injectGlobal`
@font-face {
  font-family: 'Road Rage';
  src: url(${roadRage2}) format('woff2'),
    url(${roadRage1}) format('woff');
  font-weight: normal;
  font-style: normal;
}
`

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
  fontFamily: fonts.secondary,
  fontSize: '1.25em'
}

const blackShadow = {
  textShadow: '2px 2px #000'
}

const whiteShadow = {
  textShadow: '2px 2px #fff'
}

const FormidableLogo = ({
  fill = '#fff',
  width = 97,
  height = width * (18 / 97)
}) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 97 18"
    aria-labelledby="logotype-formidable"
    className="logo-type"
  >
    <title id="logotype-formidable">Formidable</title>
    <path
      fill={fill}
      d="M3.685,8.038h5.26v2.88H3.715v5.3H0.535V2.048h9.13v2.99H3.685v3Zm16.22,3.2a5.27,5.27,0,1,1-5.28-5.26q0.142,0,.284,0A5.13,5.13,0,0,1,19.9,11.238Zm-3.04,0a2.25,2.25,0,1,0-4.48,0A2.252,2.252,0,1,0,16.865,11.238Zm6.95-3.62V6.328h-2.94v9.93h3v-4.38c0-2,1.1-2.7,2.32-2.7a4.12,4.12,0,0,1,1,.1V6.328a3,3,0,0,0-.8-0.1A2.81,2.81,0,0,0,23.815,7.618ZM40.347,5.986A3.479,3.479,0,0,0,39.8,5.978a3.41,3.41,0,0,0-3.08,1.56,3.07,3.07,0,0,0-2.94-1.56,3.46,3.46,0,0,0-2.86,1.44V6.328h-2.9v9.93h3V10.5a1.61,1.61,0,0,1,1.5-1.717q0.072,0,.144,0a1.51,1.51,0,0,1,1.6,1.68v5.76h3v-5.74a1.61,1.61,0,0,1,1.517-1.7q0.072,0,.143,0a1.51,1.51,0,0,1,1.58,1.68v5.76h2.98V9.778A3.48,3.48,0,0,0,40.347,5.986Zm4.708,10.221h3.04V6.278h-3.04v9.93Zm1.52-14.74h-0.02A1.779,1.779,0,1,0,46.575,1.468Zm12.95,13.04c0,0.9.08,1.56,0.08,1.78h-2.92a6.9,6.9,0,0,1-.08-1,3.21,3.21,0,0,1-2.66,1.18q-0.155,0-.309-0.009a4.92,4.92,0,0,1-4.611-5.211q-0.011-.155-0.011-0.311a4.85,4.85,0,0,1,4.831-4.869c1.68,0,2.44.62,2.68,1V1.748h3v12.76Zm-2.96-3.27a2.25,2.25,0,1,0-4.48,0,2.24,2.24,0,0,0,2.24,2.51v-0.03A2.24,2.24,0,0,0,56.565,11.238Zm12.94,3.41a9.746,9.746,0,0,0,.12,1.54h-2.74a4.77,4.77,0,0,1-.1-1.12,3.48,3.48,0,0,1-6.24-1.62,3.05,3.05,0,0,1,2.94-3l2.34-.36h0.041a0.68,0.68,0,0,0,.679-0.681q-0.006-.055-0.016-0.11a1.23,1.23,0,0,0-1.444-.97,1.6,1.6,0,0,0-1.68,1.49l-2.64-.54c0.12-1.42,1.44-3.3,4.36-3.3,3.22,0,4.4,1.84,4.4,3.84H69.5v4.83Zm-2.98-2.33v-0.4l-1.88.3h-0.02a1.1,1.1,0,0,0-1.1,1.1,1,1,0,0,0,1.18,1A1.71,1.71,0,0,0,66.525,12.318Zm15.04-1.1c0,3.04-1.96,5.22-4.74,5.22a3.2,3.2,0,0,1-2.8-1.34v1.12h-2.94V1.748h3v5.47a3.57,3.57,0,0,1,2.86-1.18C79.825,6.038,81.565,8.178,81.565,11.218Zm-3.04.02a2.26,2.26,0,1,0-4.5,0,2.26,2.26,0,0,0,2.26,2.48A2.23,2.23,0,0,0,78.525,11.238Zm4.01,4.98h3.04V1.748h-3.04v14.47Zm13.87-4.23h-6.92a2.15,2.15,0,0,0,2.26,1.92,1.92,1.92,0,0,0,2-1.3l2.54,0.72a4.46,4.46,0,0,1-4.64,3.19q-0.184,0-.367,0a5.06,5.06,0,0,1-4.813-5.3q-0.006-.123-0.006-0.246a5,5,0,0,1,5.006-4.994c3.1,0,5,1.9,5,5.1A6.118,6.118,0,0,1,96.4,11.988Zm-2.86-1.91q0-.068-0.012-0.136A1.78,1.78,0,0,0,91.545,8.4a1.89,1.89,0,0,0-2,1.68h4Z"
    />
  </svg>
)

FormidableLogo.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

const DangerSpan = ({ children, darkShadow = false, lightShadow = false }) => {
  let styles = dangerStyle

  if (darkShadow) {
    styles = {
      ...dangerStyle,
      ...blackShadow
    }
  } else if (lightShadow) {
    styles = {
      ...dangerStyle,
      ...whiteShadow
    }
  }

  return <span style={styles}>{children}</span>
}

DangerSpan.propTypes = {
  children: PropTypes.any,
  darkShadow: PropTypes.bool,
  lightShadow: PropTypes.bool
}

const bs = (factor = 1) => `${15 * factor}px`

const DangerPane = styled(CodePane)`
  pre {
    background-color: transparent;
  }
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide bgColor="secondary">
          <Heading size={3} lineHeight={1.1} caps textColor="primary">
            Just Enough FP to be a <DangerSpan lightShadow>
              Danger
            </DangerSpan>{' '}
            to Yourself and Coworkers
          </Heading>
        </Slide>

        <Slide bgColor="tertiary">
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
          <Text textColor="secondary">Senior Software Engineer</Text>
          <Text textColor="secondary" style={{ marginBottom: bs(4) }}>
            Host of the Second Career Devs podcast
          </Text>
          <FormidableLogo width={400} />
          <Text textColor="primary">@FormidableLabs</Text>
        </Slide>

        <Slide bgColor="secondary">
          <Image src={tweet} />
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading
            size={2}
            textColor="secondary"
            style={{ marginBottom: bs(4) }}
          >
            A <DangerSpan darkShadow>brief</DangerSpan> anecdote
          </Heading>
          <Text>About the inspiration for the title</Text>
        </Slide>

        <Slide bgColor="secondary">
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/inspiration.example')}
            style={{
              fontSize: '1em'
            }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/overengineered.example')}
            style={{
              fontSize: '1em'
            }}
          />
        </Slide>

        <Slide>
          <Heading
            size={2}
            textFont="secondary"
            textColor="tertiary"
            style={blackShadow}
          >
            What is Functional Programming?
          </Heading>
        </Slide>

        <Slide>
          <Text>
            It's a bit of a <DangerSpan>pain in the ass</DangerSpan> to define
          </Text>
        </Slide>

        <Slide>
          <Image src={pointilism} />
        </Slide>

        <Slide>
          <Image src={impressionism} style={{ marginTop: '-5.5%' }} />
        </Slide>

        <Slide>
          <Text>
            Let's focus instead on what makes it{' '}
            <DangerSpan>different</DangerSpan> from other programming paradigms
          </Text>
        </Slide>

        <Slide bgColor="tertiary">
          <List>
            {/*<ListItem textColor="primary">
              Expressions over Statements
            </ListItem>*/}
            <ListItem textColor="primary">
              Functions are first-class citizens
            </ListItem>
            <Appear>
              <ListItem textColor="primary">
                Immutable Data vs. Mutations
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Carefully Handles Side Effects
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Declarative vs. Imperative
              </ListItem>
            </Appear>
          </List>
        </Slide>

        {/* Legitimately bummed this joke fell so flat :( */}
        {/*<Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="1.75em" style={{ lineHeight: 1.2 }}>
              When I was a child, I [wrote imperative code]. When I became a[n
              adult], I set aside childish things.
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
        </Slide>*/}

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Imperative
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/imperative.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Declarative
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/declarative.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Functional
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/functional.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="tertiary">
          <List>
            <ListItem textColor="primary">Higher Order Functions</ListItem>
            <Appear>
              <ListItem textColor="primary">Purity</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Currying & Partial Application
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">Composition</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading
            size={2}
            textFont="secondary"
            textColor="tertiary"
            style={blackShadow}
          >
            Higher Order Functions
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Text textColor="primary">
            A <DangerSpan>higher order function</DangerSpan> does at least one
            of the following
          </Text>
          <List>
            <ListItem textColor="primary">
              Takes a function as an argument
            </ListItem>
            <ListItem textColor="primary">Returns a new function</ListItem>
          </List>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading
            size={2}
            textFont="secondary"
            textColor="primary"
            style={blackShadow}
          >
            Purity
          </Heading>
        </Slide>

        <Slide>
          <Text>
            A <DangerSpan>pure function</DangerSpan> is one that given the same
            inputs will always return the same output{' '}
            <DangerSpan>and</DangerSpan> without any side effects.
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            An Impure Function
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/impure.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            A Pure Function
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/pure.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide>
          <Text style={{ marginBottom: bs(4) }}>
            <DangerSpan>Purity</DangerSpan> leads to easily testable
            functionality.
          </Text>

          <Text>
            It also creates <DangerSpan>trustworthy</DangerSpan> contracts
            between our functions.
          </Text>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading
            size={2}
            textFont="secondary"
            textColor="primary"
            style={{
              textShadow: '2px 2px 2px #000'
            }}
          >
            Currying & Partial Application
          </Heading>
        </Slide>

        <Slide>
          <Layout style={{ marginLeft: '-5%' }}>
            <Fill>
              <Text>
                <DangerSpan>This</DangerSpan>
              </Text>
              <Image src={require('../assets/HaskellBCurry.jpg')} />
              <Text style={{ fontSize: '.8em' }}>Haskell Brooks Curry</Text>
              <Text style={{ fontSize: '.65em' }}>(super smart dude)</Text>
            </Fill>
            <Fill>
              <Text>
                <DangerSpan>Not This</DangerSpan>
              </Text>
              <Image src={require('../assets/redCurry.jpg')} />
              <Text style={{ fontSize: '.8em' }}>Curry</Text>
              <Text style={{ fontSize: '.65em' }}>(super delicious food)</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="secondary">
          <Text textColor="primary">
            <DangerSpan>Currying</DangerSpan> is the technique of writing a
            function so that it only receives one argument at a time.
          </Text>
        </Slide>

        <Slide>
          <Heading
            size={2}
            textColor="tertiary"
            textFont="secondary"
            style={{
              marginBottom: bs(4),
              textShadow: '2px 2px 2px #000'
            }}
          >
            Fancy Word Time
          </Heading>
          <Text style={{ marginBottom: bs(2) }}>
            <DangerSpan>Arity</DangerSpan> describes how many arguments a
            function takes.
          </Text>
          <Text>
            A <DangerSpan>unary</DangerSpan> function has an arity of one.
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            The Canonical Example
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/canonical.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            ...With More Elegance
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/elegant.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide>
          <Heading
            size={3}
            textColor="tertiary"
            textFont="secondary"
            style={{
              ...blackShadow,
              marginBottom: bs(4)
            }}
          >
            Why is this useful?
          </Heading>
          <Text style={{ marginBottom: bs(2) }}>
            Curried functions store their arguments in closure. We can create
            reusable functions that already have some of their arguments
          </Text>
          <Text style={{ marginBottom: bs(2) }}>
            This is known as <DangerSpan>partial application</DangerSpan>
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Closure in a Curried Function
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/closure.example')}
            style={{
              fontSize: '.9em'
            }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Partial Application
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/partialApplication.example')}
            style={{
              fontSize: '.9em'
            }}
          />
        </Slide>

        <Slide>
          <Text style={{ marginBottom: bs(2) }}>
            Argument order is <DangerSpan>very important</DangerSpan>
          </Text>
          <Text style={{ marginBottom: bs(2) }}>
            From most stable to least stable
          </Text>
          <Text>
            <DangerSpan>data</DangerSpan> should be the final argument
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Argument Order
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/argumentOrder.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Argument Order, Pt. 2
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/argumentOrder2.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="tertiary">
          <Heading
            size={2}
            textFont="secondary"
            textColor="primary"
            style={blackShadow}
          >
            Composition
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            Think back to high school*
          </Text>
          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            Not the <DangerSpan>shitty parts</DangerSpan> you wish you could
            forget.
          </Text>
          <Text textColor="primary" style={{ marginBottom: bs(4) }}>
            The <DangerSpan>math parts</DangerSpan> you probably did forget.**
          </Text>
          <Text
            textColor="primary"
            style={{
              fontSize: '.65em',
              marginBottom: bs()
            }}
          >
            *My apologies for any painful flashbacks this might conjure up
          </Text>
          <Text textColor="primary" style={{ fontSize: '.65em' }}>
            **Further apologies if the math parts were the shitty parts
          </Text>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading
            size={2}
            textFont="secondary"
            textColor="primary"
            style={{
              textShadow: '1px 1px 1px #000',
              marginBottom: bs(4)
            }}
          >
            Remember this?
          </Heading>
          <Text style={{ fontSize: '3em' }}>
            <em>f(x) = y</em>
          </Text>
        </Slide>

        <Slide>
          <Heading
            size={3}
            textColor="tertiary"
            textFont="secondary"
            style={{
              ...blackShadow,
              marginBottom: bs(4)
            }}
          >
            Mathematical Composition
          </Heading>
          <Text style={{ fontSize: '3em' }}>
            <em>f(g(x)) = y</em>
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Nested Composition
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/composition1.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Introducing Compose
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/composeFunction.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="tertiary">
          <List>
            <ListItem textColor="primary">
              Takes any number of functions
            </ListItem>
            <Appear>
              <ListItem textColor="primary">
                Returns a new function, awaits a value
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Works right-to-left, inside-out
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Result is passed into next function
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Functional Composition
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/composition2.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={3}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Bonus Lesson!
          </Heading>
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/pipe.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide>
          <Heading
            size={3}
            textColor="tertiary"
            textFont="secondary"
            style={{
              ...blackShadow,
              marginBottom: bs(4)
            }}
          >
            Bonus Bonus Lesson!!!
          </Heading>
          <Text style={{ fontSize: '2em' }}>The Associative Property</Text>
        </Slide>

        <Slide bgColor="secondary">
          <Text
            textColor="tertiary"
            style={{ fontSize: '3.5em', marginBottom: bs(2) }}
          >
            1 + 2 + 3
          </Text>
          <Appear>
            <Text
              textColor="tertiary"
              style={{ fontSize: '3.5em', marginBottom: bs(2) }}
            >
              (1 + 2) + 3
            </Text>
          </Appear>
          <Appear>
            <Text
              textColor="tertiary"
              style={{ fontSize: '3.5em', marginBottom: bs(2) }}
            >
              1 + (2 + 3)
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="secondary">
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/associativity.example')}
            style={{ fontSize: '1em' }}
          />
        </Slide>

        <Slide>
          <Text>
            I don't often <DangerSpan>yell</DangerSpan> at people, Kyle, but...
          </Text>
          <Heading
            size={3}
            textColor="tertiary"
            textFont="secondary"
            style={{
              ...blackShadow,
              marginTop: bs(4)
            }}
          >
            How Is this Useful?
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={4}
            textColor="tertiary"
            textFont="secondary"
            style={{ marginBottom: bs(4) }}
          >
            Data Manipulation
          </Heading>
          <DangerPane
            lang="json"
            source={require('raw-loader!../assets/jsonDump.example')}
          />
        </Slide>

        <Slide bgColor="secondary">
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/dataExamples1.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/dataExamples2.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <DangerPane
            lang="js"
            source={require('raw-loader!../assets/dataExamples3.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide bgColor="tertiary">
          <Heading
            size={3}
            textColor="primary"
            textFont="secondary"
            style={{
              ...blackShadow,
              marginBottom: bs(4)
            }}
          >
            Resources
          </Heading>

          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            The Mostly Adequate Guide to Functional Programming
          </Text>
          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            Ramda
          </Text>
          <Text textColor="primary">egghead.io</Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={2}
            textColor="tertiary"
            textFont="secondary"
            style={{
              ...whiteShadow,
              marginBottom: bs(4)
            }}
          >
            Thank You!
          </Heading>
          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            @kyleshevlin
          </Text>
          <Text textColor="primary">Second Career Devs - @2ndCareerDevs</Text>
        </Slide>
      </Deck>
    )
  }
}
