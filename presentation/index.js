import React from 'react'
import styled from 'react-emotion'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Table,
  TableHeaderItem,
  TableRow,
  TableItem,
  Text
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

// Images
import fastlyLogo from '../assets/fastly-logo-white.png'
import pointilism from '../assets/pointilism.jpg'
import impressionism from '../assets/impressionism.jpg'

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

const DangerSpan = ({
  children,
  darkShadow = false,
  lightShadow = false
}) => {
  let styles = dangerStyle

  if (darkShadow) {
    styles = { ...dangerStyle, ...blackShadow }
  } else if (lightShadow) {
    styles = { ...dangerStyle, ...whiteShadow }
  }

  return <span style={styles}>{children}</span>
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
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="secondary">
          <Heading size={3} lineHeight={1.1} caps textColor="primary">
            Just Enough FP to be a{' '}
            <DangerSpan lightShadow>Danger</DangerSpan> to Yourself
            and Coworkers
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
          <Text textColor="secondary" style={{ marginBottom: bs(4) }}>
            Senior Software Engineer
          </Text>
          <Image src={fastlyLogo} width="25%" />
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" style={{ marginBottom: bs(4) }}>
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
            It's a bit of a <DangerSpan>
              pain in the ass
            </DangerSpan>{' '}
            to define
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
            <DangerSpan>different</DangerSpan> from other programming
            paradigms
          </Text>
        </Slide>

        <Slide bgColor="tertiary">
          <List>
            <ListItem textColor="primary">
              Expressions over Statements
            </ListItem>
            <ListItem textColor="primary">Avoids Mutations</ListItem>
            <ListItem textColor="primary">
              Uses Immutable Data Structures
            </ListItem>
            <ListItem textColor="primary">
              Avoids Side Effects
            </ListItem>
            <ListItem textColor="primary">
              Declarative over Imperative
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
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
            A <DangerSpan>higher order function</DangerSpan> does at
            least one of the following
          </Text>
          <List>
            <ListItem textColor="primary">
              Takes a function as an argument
            </ListItem>
            <ListItem textColor="primary">
              Returns a new function
            </ListItem>
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
            A <DangerSpan>pure function</DangerSpan> is one that given
            the same inputs will always return the same output{' '}
            <em>and</em> without any side effects.
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

          <Text style={{ marginBottom: bs(4) }}>
            It also creates <DangerSpan>trustworthy</DangerSpan>*{' '}
            contracts between our functions.
          </Text>

          <Text textAlign="left" style={{ fontSize: '.65em' }}>
            *Mathematically, at least. The jury is still out on
            bringing pure functions<br /> to your family dinner.
          </Text>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading
            size={2}
            textFont="secondary"
            textColor="primary"
            style={{ textShadow: '2px 2px 2px #000' }}
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
              <Text style={{ fontSize: '.8em' }}>
                Haskell Brooks Curry
              </Text>
              <Text style={{ fontSize: '.65em' }}>
                (super smart dude)
              </Text>
            </Fill>
            <Fill>
              <Text>
                <DangerSpan>Not This</DangerSpan>
              </Text>
              <Image src={require('../assets/redCurry.jpg')} />
              <Text style={{ fontSize: '.8em' }}>Curry</Text>
              <Text style={{ fontSize: '.65em' }}>
                (super delicious food)
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="secondary">
          <Text textColor="primary">
            <DangerSpan>Currying</DangerSpan> is the technique of
            writing a function so that it only receives one argument
            at a time.
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
            <DangerSpan>Arity</DangerSpan> describes how many
            arguments a function takes.
          </Text>
          <Text>
            A <DangerSpan>unary</DangerSpan> function has an arity of
            one.
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
            style={{ ...blackShadow, marginBottom: bs(4) }}
          >
            Why is this useful?
          </Heading>
          <Text style={{ marginBottom: bs(2) }}>
            Curried functions store their arguments in closure. We can
            create reusable functions that already have some of their
            arguments
          </Text>
          <Text style={{ marginBottom: bs(2) }}>
            This is known as{' '}
            <DangerSpan>partial application</DangerSpan>
          </Text>
          <Text>
            This becomes clear when you write these functions the old
            fashioned way
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
            Argument order is <DangerSpan>very</DangerSpan> important
            when writing curried functions
          </Text>
          <Text style={{ marginBottom: bs(2) }}>
            It is often best to pass the least stable argument last.
          </Text>
          <Text>
            Typically, this will be the <DangerSpan>data</DangerSpan>
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
            Not the <DangerSpan>shitty parts</DangerSpan> you wish you
            could forget.
          </Text>
          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            The <DangerSpan>math parts</DangerSpan> you probably did
            forget.**
          </Text>
          <Text
            textColor="primary"
            style={{ fontSize: '.65em', marginBottom: bs() }}
          >
            *My apologies for any painful flashbacks this might
            conjure up
          </Text>
          <Text textColor="primary" style={{ fontSize: '.65em' }}>
            **Further apologies if the math parts were the shitty
            parts
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
            style={{ ...blackShadow, marginBottom: bs(4) }}
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
            <ListItem textColor="primary">
              Returns a new function, awaits a value
            </ListItem>
            <ListItem textColor="primary">
              Works right-to-left, inside-out
            </ListItem>
            <ListItem textColor="primary">
              Result is passed into next function
            </ListItem>
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

        <Slide>
          <Text>
            I don't often <DangerSpan>yell</DangerSpan> at people,
            Kyle, but...
          </Text>
          <Heading
            size={3}
            textColor="tertiary"
            textFont="secondary"
            style={{ ...blackShadow, marginTop: bs(4) }}
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
            style={{ ...blackShadow, marginBottom: bs(4) }}
          >
            Resources
          </Heading>

          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            The Mostly Adequate Guide to Functional Programming
          </Text>
          <Text textColor="primary">Ramda</Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={2}
            textColor="tertiary"
            textFont="secondary"
            style={{ ...whiteShadow, marginBottom: bs(4) }}
          >
            Thank You!
          </Heading>
          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            @kyleshevlin
          </Text>
          <Text textColor="primary">twitch.tv/kyleshevlin</Text>
        </Slide>
      </Deck>
    )
  }
}
