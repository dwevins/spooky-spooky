import { Divider, Form, Header } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

const ControlsForm = ({
  jumpScareChance,
  setJumpScareChance,
  setUseDistortion,
  setUseNegative,
  setUseScanLines,
  setUseStatic,
  submit,
  useDistortion,
  useNegative,
  useScanLines,
  useStatic
}) => (
  <Form onSubmit={submit}>
    <Header>Options</Header>

    {/* demonstrate toggle */}
    <Form.Checkbox
      checked={useDistortion}
      id="useDistortion"
      name="useDistortion"
      label="Waveform Distortion"
      onChange={() => setUseDistortion(!useDistortion)}
      toggle
    />

    <Divider hidden />

    {/* demonstrate checkboxes */}
    <Form.Group width="equal">
      <Form.Checkbox
        checked={useScanLines}
        id="useScanLines"
        label="Scan Lines"
        onChange={() => setUseScanLines(!useScanLines)}
        name="useScanLines"
      />
      <Form.Checkbox
        checked={useStatic}
        id="useStatic"
        label="Static"
        onChange={() => setUseStatic(!useStatic)}
        name="useStatic"
      />
      <Form.Checkbox
        checked={useNegative}
        id="useNegative"
        label="Negative"
        onChange={() => setUseNegative(!useNegative)}
        name="useNegative"
      />
    </Form.Group>

    <Divider hidden />

    {/* demonstrate input */}
    <Form.Input
      label="Jump Scare Chance"
      onChange={e => setJumpScareChance(e.target.value)}
      min="0"
      max="100"
      type="number"
      value={jumpScareChance}
    />

    <Divider hidden />

    <Form.Button type="submit">Spook 'Em</Form.Button>
  </Form>
);

ControlsForm.propTypes = {
  jumpScareChance: PropTypes.string.isRequired,
  setJumpScareChance: PropTypes.func.isRequired,
  setUseDistortion: PropTypes.func.isRequired,
  setUseNegative: PropTypes.func.isRequired,
  setUseScanLines: PropTypes.func.isRequired,
  setUseStatic: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  useDistortion: PropTypes.bool.isRequired,
  useNegative: PropTypes.bool.isRequired,
  useScanLines: PropTypes.bool.isRequired,
  useStatic: PropTypes.bool.isRequired
};

export default ControlsForm;
