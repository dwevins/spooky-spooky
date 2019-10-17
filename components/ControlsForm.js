import { Divider, Form, Header } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

const ControlsForm = ({ submit }) => (
  <Form onSubmit={submit}>
    <Header>Options</Header>

    {/* demonstrate toggle */}
    <Form.Checkbox toggle label="Waveform Distortion" />

    <Divider hidden />

    {/* demonstrate checkboxes */}
    <Form.Group width="equal">
      <Form.Checkbox label="Scan Lines" />
      <Form.Checkbox label="Static" />
      <Form.Checkbox label="Negative" />
    </Form.Group>

    <Divider hidden />

    {/* demonstrate input */}
    <Form.Input type="number" label="Jump Scare Chance" min="0" max="100" />
    <Form.Button type="submit">Spook 'Em</Form.Button>
  </Form>
);

ControlsForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ControlsForm;
