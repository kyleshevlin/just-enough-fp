// Import React
import React from 'react'

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

const DangerSpan = ({ children }) => <span style={dangerStyle}>{children}</span>

const bs = (factor = 1) => `${15 * factor}px`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide bgColor="secondary">
          <Heading size={3} lineHeight={1.1} caps textColor="primary">
            Just Enough FP to be a{' '}
            <span
              style={{
                ...dangerStyle,
                textShadow: '1px 1px white'
              }}
            >
              Danger
            </span>{' '}
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
          <Text textColor="secondary" style={{ marginBottom: bs(4) }}>
            Senior Software Engineer
          </Text>
          <Image src={fastlyLogo} width="25%" />
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
            A <DangerSpan>brief</DangerSpan> anecdote
          </Heading>
          <Text>About the inspiration for the title</Text>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/inspiration.example')}
            style={{
              fontSize: '1em'
            }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/overengineered.example')}
            style={{
              fontSize: '1em'
            }}
          />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="1.75em" style={{ lineHeight: 1.2 }}>
              When I was a child, I [wrote imperative code]. When I became a[n adult], I set aside
              childish things.
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

        <Slide>
          <Heading>What is Functional Programming?</Heading>
        </Slide>

        <Slide>
          <Heading>
            It's a <DangerSpan>pain the ass</DangerSpan> to define
          </Heading>
        </Slide>

        <Slide>
          <Image src={require('../assets/pointilism.png')} />
        </Slide>

        <Slide>
          <Image src={require('../assets/impressionism.jpg')} style={{ marginTop: '-5.5%' }} />
        </Slide>

        <Slide>
          <Text>
            Let's focus instead on what makes it <DangerSpan>different</DangerSpan> from other
            programming paradigms
          </Text>
        </Slide>

        <Slide>
          <List>
            <ListItem>Expressions over Statements</ListItem>
            <ListItem>Avoids Mutations</ListItem>
            <ListItem>Uses Immutable Data Structures</ListItem>
            <ListItem>Avoids Side Effects</ListItem>
            <ListItem>Declarative over Imperative</ListItem>
          </List>
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
          <CodePane
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
          <CodePane
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
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/functional.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide>
          <Heading size={2} textFont="secondary">
            Higher Order Functions
          </Heading>
        </Slide>

        <Slide>
          <Text>A higher order function does at least one of the following</Text>
          <List>
            <ListItem>Takes a function as an argument</ListItem>
            <ListItem>Returns a new function</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textFont="secondary">
            Purity
          </Heading>
        </Slide>

        <Slide>
          <Text>
            A pure function is one that given the same inputs will always return the same output{' '}
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
          <CodePane
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
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/pure.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide>
          <Text style={{ marginBottom: bs(4) }}>
            Purity leads to easily testable functionality.
          </Text>

          <Text>
            It also creates trustworthy contracts between our functions which leads to more
            interesting functionality later.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textFont="secondary">
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

        <Slide>
          <Text>
            <DangerSpan>Currying</DangerSpan> is the technique of writing a function so that it only
            receives one argument at a time.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textFont="secondary" style={{ marginBottom: bs(4) }}>
            Fancy Word Time
          </Heading>
          <Text style={{ marginBottom: bs(2) }}>
            <DangerSpan>Arity</DangerSpan> describes how many arguments a function takes.
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
          <CodePane
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
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/elegant.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide>
          <Heading size={3} textFont="secondary" style={{ marginBottom: bs(4) }}>
            Why was that useful?
          </Heading>
          <Text style={{ marginBottom: bs(2) }}>
            Because curried functions can store their arguments in closure. This is known as{' '}
            <DangerSpan>partial application</DangerSpan>
          </Text>
          <Text>This becomes clear when you write them the old fashioned way</Text>
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
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/closure.example')}
            style={{ fontSize: '.9em', maxWidth: 'none', marginLeft: '-18%', marginRight: '-18%' }}
          />
        </Slide>

        <Slide>
          <Text style={{ marginBottom: bs(2) }}>
            Argument order is <em>very</em> important when writing curried functions
          </Text>
          <Text>
            It is often best to pass the least stable argument last. Typically, this will be the{' '}
            <DangerSpan>data</DangerSpan>
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
          <CodePane
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
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/argumentOrder2.example')}
            style={{ fontSize: '.9em' }}
          />
        </Slide>

        <Slide>
          <Heading size={2} textFont="secondary">
            Composition
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            Think back to high school*
          </Text>
          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            Not the <DangerSpan>shitty parts</DangerSpan> you wish you could forget.
          </Text>
          <Text textColor="primary" style={{ marginBottom: bs(2) }}>
            The <DangerSpan>math parts</DangerSpan> you probably did forget.**
          </Text>
          <Text textColor="primary" style={{ fontSize: '.65em', marginBottom: bs() }}>
            *My apologies for any painful flashbacks this might conjure up
          </Text>
          <Text textColor="primary" style={{ fontSize: '.65em' }}>
            **Further apologies if the math parts were the shitty parts
          </Text>
        </Slide>
      </Deck>
    )
  }
}
