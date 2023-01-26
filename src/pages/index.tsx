import Checkbox from '_components/checkbox';
import Radio from '_components/radio';

export default function App() {
  return (
    <div>
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
      <Radio name="rd" />
      <Radio name="rd" />
      <Radio name="rd" />
      <Radio name="rd" />
      <Radio name="rd" />
      <Radio name="rd" disabled />
      <Radio name="rd" defaultChecked disabled />
    </div>
  );
}
