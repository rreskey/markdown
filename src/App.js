import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {marked} from 'marked'

const initialState = `
 # This is heading
 ## This is subheading

 - list item one
 - list item two
 - list item three

 This is inline code \`<div></div>\`

  This is block of code 
  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`

class App extends React.Component {
  state = {
    text: initialState
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true })

    const styles = {
      textarea: {
        minHeight: '695px',
        fontSize: '1.8rem',
        borderRadius: '15px 0 0 15px',
        border: '1px solid black',
      }
    }

    return (
      <Container fluid='md' className='container-bg'>
          <h2 className='text-center m-4'>Convert your text</h2>
        <Row className=''>
          <Col className='col-6'>
            <h2 className='text-center'>Type down below</h2>
            <textarea className='form-control' style={styles.textarea} id='editor' value={text} onChange={this.handleChange}/>
          </Col>
          <Col className='col-6'>
          <h2 className='text-center'>Result</h2>
            <div className='preview' id='preview' dangerouslySetInnerHTML={{__html: markdown}} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
